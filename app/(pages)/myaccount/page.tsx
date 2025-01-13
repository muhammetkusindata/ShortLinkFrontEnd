"use client";
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/app/redux/store';
import { useSession, signIn, signOut } from 'next-auth/react';
import ProtectedPage from '@/pages/protected';

const page = () => {

  const [urls, setUrls] = useState([{ id: 1, url: 'https://example.com' }]);
  const [newUrl, setNewUrl] = useState('');
  const { data: session, status } = useSession();

  const addUrl = () => {
    setUrls([...urls, { id: urls.length + 1, url: newUrl }]);
    setNewUrl('');
  };

  return (

    <ProtectedPage>
      <div className="container w-[%85] mx-auto p-4">

      </div>
    </ProtectedPage>

  );
};

export default page;