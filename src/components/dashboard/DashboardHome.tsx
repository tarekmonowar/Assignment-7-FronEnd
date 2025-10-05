

export default function DashboardHome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full text-white px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Welcome to your Dashboard
      </h1>

      <p className="text-lg mb-4 text-center max-w-xl">
        Here you can manage all your content. You can{" "}
        <span className="font-semibold text-blue-400">edit</span>,
        <span className="font-semibold text-red-400"> delete</span>, or{" "}
        <span className="font-semibold text-green-400">create</span> blogs and
        projects. Use the sidebar to navigate between sections.
      </p>

      <div className="bg-gray-800 rounded-lg p-6 max-w-xl w-full text-center shadow-lg">
        <p className="mb-4">Quick Instructions:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 text-left">
          <li>
            Go to <span className="text-blue-400">Blogs</span> to view, edit, or
            delete your blogs.
          </li>
          <li>
            Go to <span className="text-purple-400">Projects</span> to manage
            your projects.
          </li>
          <li>
            You can create new blogs or projects from the corresponding
            sections.
          </li>
          <li>Check recent activity to see the latest changes.</li>
        </ul>
      </div>

      <p className="text-gray-400 mt-8 text-sm text-center">
        Use the sidebar on the left to navigate your dashboard.
      </p>
    </div>
  );
}
