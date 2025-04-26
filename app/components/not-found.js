"use client"; 

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white p-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Oops! Page not found.</p>
      <Link
        href="/"
        className="text-white bg-gradient-to-br from-blue-400 to-red-600 hover:bg-gradient-to-bl font-medium rounded-full text-lg px-7 py-3 cursor-pointer"
        >
        Go Home
      </Link>
    </div>
  );
}
