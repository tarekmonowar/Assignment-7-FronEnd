// app/dashboard/page.tsx
"use client";

import DashboardHome from "@/components/dashboard/DashboardHome";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const { status, data: session } = useSession();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated" && !isRedirecting) {
      setIsRedirecting(true);
      router.push("/auth/login");
    }
  }, [status, router, isRedirecting]);

  // Show loading state
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-center">Checking authentication...</p>
      </div>
    );
  }

  // Show error state
  if (status === "unauthenticated") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-center">Redirecting to login...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-center">
          No session found. Please login again.
        </p>
      </div>
    );
  }

  return <DashboardHome />;
}
