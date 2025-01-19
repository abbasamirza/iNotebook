import React from "react";
import { Button } from "./Button";
import { Moon, Sun } from "lucide-react";
import { toggleTheme } from "../utils/ui";
import imagePath from "../utils/imagePaths";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 max-w-7xl mx-auto w-full z-10">
      <div className="flex items-center gap-2">
        <img src={imagePath.logo} alt="iNotebook" className="h-8 w-8" />
        <span className="text-2xl font-bold text-primary">iNotebook</span>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </nav>
  );
};

export default Navbar;
