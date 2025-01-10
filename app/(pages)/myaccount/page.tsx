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
          <h1 className="text-2xl font-bold mb-4">Hesabım</h1>
          <h2>Hoş Geldin: {session?.user?.name}</h2>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Yeni URL Ekle</h2>
            <div className="flex space-x-2">
              <input
                type="text"
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full"
              />
              <button onClick={addUrl} className="bg-blue-500 text-white p-2 rounded">Ekle</button>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Eklediğim Linkler</h2>
            <ul className="space-y-2">
              {urls.map((url) => (
                <li key={url.id} className="flex justify-between items-center border-b border-gray-200 p-2">
                  <span>{url.url}</span>
                  <div className="space-x-2">
                    <button onClick={() => {}} className="bg-red-500 text-white p-1 rounded">Sil</button>
                    <button onClick={() =>{}} className="bg-yellow-500 text-white p-1 rounded">Düzenle</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </ProtectedPage>
      
  );
};

export default page;