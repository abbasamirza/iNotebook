import React, { useState } from "react";
import { Button } from "./Button";
import { Plus, Search } from "lucide-react";
import { Input } from "./Input";
import { ScrollArea } from "./ScrollArea";

const NotesSidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // This is sample data. In a real app, you'd fetch this from your backend.
  const notes = [
    {
      id: "1",
      title: "Meeting notes",
      content:
        "Discussed project timeline and deliverables with the team today and assigned tasks to each member",
      time: "11:05 PM",
    },
    {
      id: "2",
      title: "Ideas for new feature",
      content: "User authentication using biometrics",
      time: "10:30 AM",
    },
    {
      id: "3",
      title: "Bug fixes",
      content: "Fixed issue with data not loading properly",
      time: "Yesterday",
    },
  ];

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-80 bg-background border-r flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-muted-foreground">
            {notes.length} notes
          </span>
          <h2 className="text-lg font-semibold">All Notes</h2>
          <Button variant="ghost" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search notes"
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <ScrollArea className="flex-grow">
        <div className="p-4 space-y-4">
          {filteredNotes.map((note) => (
            <Button
              key={note.id}
              variant="ghost"
              className="w-full max-w-72 justify-start text-left h-full inline-block"
              //   onClick={() => onSelectNote(note.id)}
            >
              <div>
                <h3 className="font-semibold">{note.title}</h3>
                <p className="text-sm text-muted-foreground truncate">
                  {note.content}
                </p>
                <span className="text-xs text-muted-foreground">
                  {note.time}
                </span>
              </div>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default NotesSidebar;
