import { createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.prod';
export const supabase =createClient(
    environment.supabaseUrl,
    environment.supabaseKey
);

