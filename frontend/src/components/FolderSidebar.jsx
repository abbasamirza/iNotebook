import React, { useState } from "react";
import { Button } from "./Button";
import {
  Folder,
  Inbox,
  LogOut,
  Moon,
  Plus,
  Sun,
  Tag,
  Trash,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ScrollArea } from "./ScrollArea";
import { toggleTheme } from "../utils/ui";
import { Separator } from "./Separator";
import path from "../constants/paths";
import { deleteSession } from "../utils/utils";
import { useNavigate } from "react-router";
import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";

const FolderSidebar = () => {
  const [showToggleSidebarButton, setShowToggleSidebarButton] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigate = useNavigate();

  const onToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const onLogout = () => {
    deleteSession();
    navigate(path.home);
  };

  const folders = [
    { name: "Work", count: 5 },
    { name: "Personal", count: 3 },
    { name: "Projects", count: 7 },
  ];

  const tags = [
    { name: "Important", count: 4 },
    { name: "Todo", count: 6 },
    { name: "Ideas", count: 2 },
  ];

  return (
    <div
      className={`bg-background border-r flex flex-col relative transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-6" : "w-64"
      }`}
      onMouseEnter={() => setShowToggleSidebarButton(true)}
      onMouseLeave={() => setShowToggleSidebarButton(false)}
    >
      <Button
        variant="ghost"
        size="icon"
        className={`absolute top-[68px] hover:bg-transparent -right-4 transform -translate-y-1/2 z-10 transition-opacity duration-300 ${
          showToggleSidebarButton || isCollapsed ? "opacity-100" : "opacity-0"
        }`}
        onClick={onToggle}
      >
        {isCollapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </Button>
      <div className={`p-4 space-y-2 ${isCollapsed ? "hidden" : ""}`}>
        <div className="flex justify-between items-center">
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost" size="icon" onClick={onLogout}>
                <LogOut className="h-4 w-4" />
                <span className="sr-only">Logout</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Logout</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Toggle theme</TooltipContent>
          </Tooltip>
        </div>
      </div>
      <Separator className={isCollapsed ? "hidden" : ""} />
      <ScrollArea className={`flex-grow ${isCollapsed ? "hidden" : ""}`}>
        <div className="p-4 space-y-4">
          <Button
            variant="ghost"
            className="w-full justify-between"
            // onClick={() => onSelectFolder("All Notes")}
          >
            <span className="flex items-center">
              <Inbox className="mr-2 h-4 w-4" />
              All Notes
            </span>
            <span className="bg-muted text-muted-foreground text-xs py-1 px-2 rounded-full">
              15
            </span>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-between"
            // onClick={() => onSelectFolder("Trash")}
          >
            <span className="flex items-center">
              <Trash className="mr-2 h-4 w-4" />
              Trash
            </span>
            <span className="bg-muted text-muted-foreground text-xs py-1 px-2 rounded-full">
              2
            </span>
          </Button>
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">Folders</h3>
              <Button variant="ghost" size="icon" className="h-5 w-5">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {folders.map((folder) => (
              <Button
                key={folder.name}
                variant="ghost"
                className="w-full justify-between mb-1"
                // onClick={() => onSelectFolder(folder.name)}
              >
                <span className="flex items-center">
                  <Folder className="mr-2 h-4 w-4" />
                  {folder.name}
                </span>
                <span className="bg-muted text-muted-foreground text-xs py-1 px-2 rounded-full">
                  {folder.count}
                </span>
              </Button>
            ))}
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">Tags</h3>
              <Button variant="ghost" size="icon" className="h-5 w-5">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {tags.map((tag) => (
              <Button
                key={tag.name}
                variant="ghost"
                className="w-full justify-between mb-1"
                // onClick={() => onSelectFolder(tag.name)}
              >
                <span className="flex items-center">
                  <Tag className="mr-2 h-4 w-4" />
                  {tag.name}
                </span>
                <span className="bg-muted text-muted-foreground text-xs py-1 px-2 rounded-full">
                  {tag.count}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default FolderSidebar;
