import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleTheme = () => {
        setDarkMode((prev) => !prev);
        if (!darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };
    return (
        <div className="w-full flex justify-between p-4 border-b">
            <Button>
                <Menu />
            </Button>
            <Button onClick={toggleTheme}>{darkMode ? "☽" : "☀️"}</Button>
        </div>
    );
};

