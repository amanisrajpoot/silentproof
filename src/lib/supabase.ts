import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Force initialization to debug missing env vars
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(`Supabase Credentials Missing! URL: ${supabaseUrl ? 'Set' : 'Missing'}, Key: ${supabaseAnonKey ? 'Set' : 'Missing'}`);
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: false,
    },
    global: {
        fetch: async (url, options) => {
            const isNode = typeof window === 'undefined';

            // 1. Sanitize headers (common fix)
            const headers = new Headers(options?.headers);
            const safeHeaders: Record<string, string> = {};
            headers.forEach((value, key) => {
                safeHeaders[key] = value;
            });
            const safeOptions = { ...options, headers: safeHeaders };

            try {
                return await fetch(url, safeOptions);
            } catch (e: any) {
                // Only intervene in Node.js for connection timeouts (IPv6 issues)
                if (isNode && (e.cause?.code === 'UND_ERR_CONNECT_TIMEOUT' || e.message.includes('fetch failed'))) {
                    try {
                        console.log(`Supabase fetch failed ("${e.message}"), retrying with IPv4 bypass...`);

                        // Dynamic imports to avoid client-side build errors
                        const dns = await import('dns');
                        const https = await import('https');
                        const { Readable } = await import('stream');

                        // Use Google DNS to execute a manual A record lookup (IPv4)
                        const { Resolver } = dns.promises;
                        const resolver = new Resolver();
                        resolver.setServers(['8.8.8.8', '8.8.4.4']);

                        const urlObj = new URL(url as string);
                        const addresses = await resolver.resolve4(urlObj.hostname);

                        if (addresses && addresses.length > 0) {
                            const ip = addresses[0];

                            // FORCE Host header to match hostname (otherwise it defaults to IP)
                            safeHeaders['Host'] = urlObj.hostname;

                            return new Promise<Response>((resolve, reject) => {
                                const req = https.request({
                                    host: ip,
                                    servername: urlObj.hostname, // SNI checks this
                                    path: urlObj.pathname + urlObj.search,
                                    method: safeOptions.method,
                                    headers: safeHeaders, // headers now include correct Host
                                }, (res) => {
                                    // Convert Node stream to Web stream for Response
                                    const body = Readable.toWeb(res);
                                    const response = new Response(body as any, {
                                        status: res.statusCode,
                                        statusText: res.statusMessage,
                                        headers: res.headers as any
                                    });
                                    resolve(response);
                                });

                                req.on('error', (err) => reject(err));

                                if (safeOptions.body) {
                                    req.write(safeOptions.body);
                                }
                                req.end();
                            });
                        }
                    } catch (fallbackError: any) {
                        console.error('IPv4 fallback failed:', fallbackError.message);
                        // Fall through to throw original error
                    }
                }
                // Throw original error if not handled or fallback failed
                const msg = `CustomFetchError: ${e.message} URL: ${url}`;
                console.error(msg);
                throw new Error(msg);
            }
        },
    },
});
