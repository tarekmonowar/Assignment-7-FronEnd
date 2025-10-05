"use client";

import { useEffect } from "react";
import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-red-600">
        {error.message || "Something went wrong!"}
      </h2>
      <p className="text-gray-600 mb-4">This error occurred in your app.</p>
      <button
        onClick={reset}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Try Again
      </button>
    </div>
  );
}
