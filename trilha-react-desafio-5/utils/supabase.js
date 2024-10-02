import { createClient } from '@supabase/supabase-js';async (params) => {
  
  
}
const supabaseUrl = 'https://cbsstmtzqyvlcnbwwrcz.supabase.co'; // Substitua pelo URL do seu Supabase
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNic3N0bXR6cXl2bGNuYnd3cmN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0NjAxNzUsImV4cCI6MjA0MzAzNjE3NX0.dlZR7O43N6jYWmQyjJeDTys81wJn9mkhGvAmpkExkls'; // Substitua pela sua chave API
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
