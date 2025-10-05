"use client";
import { Button } from "@/components/ui/button";
import { Edit, Edit3, FilePlus, FolderPlus, Home, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/", icon: <Home className="h-5 w-5 text-white" /> },
    {
      name: "Create Blog",
      path: "/dashboard/create-blog",
      icon: <FilePlus className="h-5 w-5 text-white" />,
    },
    {
      name: "Edit Blog",
      path: "/dashboard/edit-blog",
      icon: <Edit className="h-5 w-5 text-white" />,
    },
    {
      name: "Add Project",
      path: "/dashboard/add-project",
      icon: <FolderPlus className="h-5 w-5 text-white" />,
    },
    {
      name: "Edit Project",
      path: "/dashboard/edit-project",
      icon: <Edit3 className="h-5 w-5 text-white" />,
    },
  ];

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-black/40 text-white pt-5">
      <nav className="flex-1 space-y-5 p-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center gap-2 rounded-sm px-3 py-2 text-md font-semibold  transition-colors ${
                isActive ? "bg-accent  text-black " : "hover:bg-accent/50"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-500">
        <Button
          className="w-full justify-start gap-2 cursor-pointer"
          onClick={() => signOut({ callbackUrl: "/auth/login" })}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </aside>
  );
}
