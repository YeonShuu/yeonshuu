'use client'
require('dotenv').config();
import { supabase } from '@/supabase/client';
import { useEffect, useState } from 'react';
import { AuthChangeEvent, Session, User } from '@/node_modules/@supabase/gotrue-js/src/lib/types';

export default function Home() {

  let [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event: AuthChangeEvent, session: Session) => {
      setUser(session ? session.user : null);
    })
  }, [])


  return (
   <div></div>
  );
}
