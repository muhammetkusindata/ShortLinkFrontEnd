"use client";
import { useSession, signIn, signOut } from 'next-auth/react';

import { ReactNode } from 'react';

export default function ProtectedPage({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();

  if (status == "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return (
      <div className='container'>
        <div className='w-[85%] mx-auto flex flex-col justify-center items-center py-10 gap-7'>
        <p className='text-2xl font-thin text-red-900'>Giriş Yapmalısınız!</p>
        <button className='btn btn-neutral w-[100px] text-white' onClick={() => signIn()}>Giriş Yap!</button>
        </div>
      </div>
    );
  }

  return (
    <div className='my-5'>
      {children}
    </div>
  );
} 