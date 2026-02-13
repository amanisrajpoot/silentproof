-- Deleting by range to clear potential block corruption
-- This deletes the first created row, which we suspect is 'matrimonial'
delete from public.services where created_atIn (
  select created_at from public.services order by created_at asc limit 1
);
