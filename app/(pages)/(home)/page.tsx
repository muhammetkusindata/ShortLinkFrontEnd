"use client";

export default function Home() {
  return (
    <div className="container mx-auto p-4 bg-gradient-to-r min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-slate-800 drop-shadow-lg">
        URL Kısalt
      </h1>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="URL'nizi buraya yapıştırın"
          className="border p-2 w-1/3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <button className="bg-slate-400 text-white p-2 ml-2 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
          Kısalt
        </button>
      </div>
      <div className="mt-6 text-center text-white">
        <p className="bg-white bg-opacity-20 p-2 rounded-lg shadow-md">
          Kısaltılmış URL'niz burada görünecek.
        </p>
      </div>
    </div>
  );
}
