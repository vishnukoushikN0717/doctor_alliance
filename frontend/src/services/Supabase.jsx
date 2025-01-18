// File: frontend/src/services/supabase.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://cnrrxbiamggizeplmwnp.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNucnJ4YmlhbWdnaXplcGxtd25wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxOTMyMTMsImV4cCI6MjA1Mjc2OTIxM30.wQnZMQs4pzF9qLgtoF8UgzOcDvvw-Ka6giVZgNvy9Qk';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);