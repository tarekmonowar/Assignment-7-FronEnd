"use client";

import DashboardHome from "@/components/dashboard/DashboardHome";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  if (status !== "authenticated") {
    return (
      <p className="text-white text-center mt-20">Checking authentication...</p>
    );
  }

  return <DashboardHome />;
}
