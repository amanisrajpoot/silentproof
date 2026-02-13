-- Deleting the corrupted row to restore service page functionality
delete from public.services where slug = 'matrimonial';
