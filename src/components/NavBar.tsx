"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";

const NavBar: React.FC<{
    onSidebarToggle: () => void;
    isDarkMode: boolean;
    toggleTheme: () => void;
}> = ({ onSidebarToggle, isDarkMode, toggleTheme }) => {
    const pathname = usePathname();

    return (
        <div
            className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-bagroundDark/70 backdrop-blur-md shadow-sm py-4 px-6 flex justify-between items-center border-b border-gray-200 dark:border-borderDark mb-3"
        >
            {/* Sidebar Toggle Button */}
            <button
                onClick={onSidebarToggle}
                className="lg:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
            >
                <FaBars size={24} />
            </button>

            {/* Title */}
            <h1 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
                Workunity Manager
            </h1>

            {/* Theme Toggle Button */}
            <div className="flex items-center space-x-4">
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-gray-200/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-200 hover:scale-110 transition-transform"
                >
                    {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
                </button>
            </div>
        </div>
    );
};

export default NavBar;
