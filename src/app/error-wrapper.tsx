"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => console.error(error), [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4 text-red-600">
        {error.message || "Something went wrong!"}
      </h2>
      <p className="text-gray-600 mb-4">
        Please try again or contact support if it persists.
      </p>
      <button
        onClick={reset}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Try Again
      </button>
    </div>
  );
}
