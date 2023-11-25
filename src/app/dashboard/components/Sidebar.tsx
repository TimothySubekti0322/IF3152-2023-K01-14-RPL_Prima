"use client";

import React, { FC, useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface SidebarProps {
  role: string;
}

const Sidebar: FC<SidebarProps> = ({ role }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Ref for the sidebar
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Function to handle outside click
  const handleOutsideClick = (event: MouseEvent) => {
    if (sidebarOpen && !sidebarRef.current?.contains(event.target as Node)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Adding click event listener
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      // Removing the event listener on cleanup
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [sidebarOpen]);

  // Acquired Path name
  const path = usePathname();

  // get menu
  const menu = path.split("/")[2];

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-4 ms-4 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        ref={sidebarRef}
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : " -translate-x-full"
        } md:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-8 py-4 overflow-y-auto bg-[#1C2434] text-white">
          <ul className="space-y-4 font-medium">
            <li>
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-36 h-36 mx-auto"
              />
            </li>
            <li className={role === "Admin" ? "hidden" : ""}>
              <a
                href="/dashboard/class"
                className={`flex items-center p-2  hover:bg-gray-700 group ${
                  menu == "class" ? "bg-gray-700" : ""
                }`}
              >
                <img src="/images/class.png" alt="class" className="w-7 h-7" />
                <span className="ml-6">Class</span>
              </a>
            </li>
            <li className={role === "Admin" ? "hidden" : ""}>
              <a
                href="/dashboard/instructor"
                className={`flex items-center p-2  hover:bg-gray-700 group ${
                  menu == "instructor" ? "bg-gray-700" : ""
                }`}
              >
                <img
                  src="/images/instructor.png"
                  alt="instructor"
                  className="w-7 h-7"
                />
                <span className="flex-1 ml-6 whitespace-nowrap">
                  Instructor
                </span>
              </a>
            </li>
            <li>
              <a
                href="/dashboard/student"
                className={`flex items-center p-2  hover:bg-gray-700 group ${
                  menu == "student" ? "bg-gray-700" : ""
                }`}
              >
                <img
                  src="/images/student.png"
                  alt="student"
                  className="w-7 h-7"
                />
                <span className="flex-1 ml-6 whitespace-nowrap">Student</span>
              </a>
            </li>
            <li>
              <a
                href="/dashboard/schedule"
                className={`flex items-center p-2  hover:bg-gray-700 group ${
                  menu == "schedule" ? "bg-gray-700" : ""
                }`}
              >
                <img
                  src="/images/schedule.png"
                  alt="schedule"
                  className="w-7 h-7"
                />
                <span className="flex-1 ml-6 whitespace-nowrap">Schedule</span>
              </a>
            </li>
            <li className={role === "Admin" ? "hidden" : ""}>
              <a
                href="/dashboard/user"
                className={`flex items-center p-2  hover:bg-gray-700 group ${
                  menu == "user" ? "bg-gray-700" : ""
                }`}
              >
                <img src="/images/user.png" alt="user" className="w-7 h-7" />
                <span className="flex-1 ml-6 whitespace-nowrap">User</span>
              </a>
            </li>
            <li>
              <a
                href={`${
                  role == "Owner"
                    ? "/dashboard/vehicle"
                    : "/dashboard/vehicle_status"
                }`}
                className={`flex items-center p-2  hover:bg-gray-700 group ${
                  menu == "vehicle" || menu == "vehicle_status"
                    ? "bg-gray-700"
                    : ""
                }`}
              >
                <img
                  src="/images/vehicle.png"
                  alt="vehicle"
                  className="w-7 h-7"
                />
                <span className="flex-1 ml-6 whitespace-nowrap">
                  {role == "Admin" ? "Vehicle Status" : "Vehicle"}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
