import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark";
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
            root.classList.remove('light');
        } else {
            root.classList.add('light');
            root.classList.remove('dark');
        }

        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <div className="mr-10">
            <button
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 text-center dark:text-white px-2 py-2 rounded-md flex items-center"
                onClick={() => setDarkMode(prevMode => !prevMode)}
            >
                {darkMode ? (
                    <FaSun className="" />
                ) : (
                    <FaMoon className="" />
                )}
            </button>
        </div>
    );
}

export default ThemeToggle;
