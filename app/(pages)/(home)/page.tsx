"use client";

import { useState } from "react";
import { z } from "zod";

const urlSchema = z.string().url();

export default function Home() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    try {
      urlSchema.parse(e.target.value);
      setError("");
    } catch (err) {
      setError("Please enter a valid URL.");
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gradient-to-r min-h-screen">
      <h1 className="text-5xl lg:text-7xl font-light text-center pt-10 text-slate-800 drop-shadow-lg">
        Create a new Link
      </h1>
      <h3 className="text-2xl lg:text-2xl font-extralight text-center">Enter any URL to preserve it forever.</h3>
      <div className="flex flex-col md:flex-row justify-center mt-10 gap-3">
        <input
          type="text"
          placeholder="Paste URL here"
          className="input input-bordered w-full mx-auto md:max-w-[75%]"
          value={url}
          onChange={handleInputChange}
        />
        <button
          className="bg-template1 text-white p-2 ml-2 rounded-lg shadow-md hover:bg-slate-800 transition duration-300 max-w-[75%] mx-auto"
          disabled={!!error}
        >
          Create New Short Link
        </button>
      </div>
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      <div className="mt-6 text-center text-white">
        <p className="bg-white bg-opacity-20 p-2 rounded-lg shadow-md">
          Kısaltılmış URL'niz burada görünecek.
        </p>
      </div>
    </div>
  );
}
