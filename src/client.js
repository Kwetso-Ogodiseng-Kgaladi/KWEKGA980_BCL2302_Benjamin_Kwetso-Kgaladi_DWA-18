
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zrzqsxxjwctvghsftkeb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyenFzeHhqd2N0dmdoc2Z0a2ViIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA3ODQ1MDIsImV4cCI6MjAwNjM2MDUwMn0.PwoGkKaN5kwpklh3gxN9GXzpErN70NLv8IH5fUKocEs'
export const supabase = createClient(supabaseUrl, supabaseKey)