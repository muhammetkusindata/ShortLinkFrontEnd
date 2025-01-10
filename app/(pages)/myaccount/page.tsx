"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (!user) {
      router.push('/login'); // Redirect to login if not authenticated
    }
  }, [router]);

  return (
    <div className="container w-[%85] mx-auto p-4 bg-[#A9BFA8]">
      <h1 className="text-2xl font-bold mb-4">Hesabım</h1>
      {/* Rest of the component */}
    </div>
  );
};

export default page;