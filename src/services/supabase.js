
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iomhqpffeazdehrqzmgp.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvbWhxcGZmZWF6ZGVocnF6bWdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5ODE3NjUsImV4cCI6MjA1MjU1Nzc2NX0.NIc9cxHK5WHg4dtl01-x1cSOh8uF6EBJ3zFe9OK2kJ0"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;