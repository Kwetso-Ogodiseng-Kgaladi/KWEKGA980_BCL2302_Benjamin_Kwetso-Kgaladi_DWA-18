import { Auth } from '@supabase/auth-ui-react'
import React from 'react'
import {ThemeSupa,} from '@supabase/auth-ui-shared'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
   'https://wfzfxdjswopkakvvwhfp.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmemZ4ZGpzd29wa2FrdnZ3aGZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA3NDMyOTMsImV4cCI6MjAwNjMxOTI5M30.maxDjghvnZrXYPAwVC7TghwuQ1YiHa8rbhOcx-YzGGo',
)
export default function Supa(){

return(
  <>
  <Auth
    supabaseClient={supabase}
    appearance={{ theme: ThemeSupa }}
    theme="light"
 />
 </>
  )
}