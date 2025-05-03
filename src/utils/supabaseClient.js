import { createClient } from '@supabase/supabase-js'

// normally these ketys will be in a .env file but for assigmetn purposes they are here 

const supabaseUrl = "https://khlcedsfmkutrmqnjhjc.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtobGNlZHNmbWt1dHJtcW5qaGpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1MTk4MzQsImV4cCI6MjA2MTA5NTgzNH0.GdlyCQT_KZIZxnOaNJaM-w2pQvn8_62b3OAPwKZP6Fo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
