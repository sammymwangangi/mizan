import { createClient } from "@supabase/supabase-js";


export const supabase = createClient(
  "https://olzbkmdrsiabkksydbzv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9semJrbWRyc2lhYmtrc3lkYnp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQwOTM4NjgsImV4cCI6MTk5OTY2OTg2OH0.eYVh_2m63aUS_I_Va46LIhVU54M6lWBEXQIDbu36Y0w"
);
