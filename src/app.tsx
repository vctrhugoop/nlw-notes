import { ChangeEvent, useState } from "react";
import logo from "./assets/logo-nlw.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

interface Note {
  id: string;
  date: Date;
  content: string;
}

export function App() {
  const [search, setSearch] = useState("");
  const [notes, setnotes] = useState<Note[]>(() => {
    const noteOnStorege = localStorage.getItem("notes");

    if (noteOnStorege) {
      return JSON.parse(noteOnStorege);
    }

    return [];
  });

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };

    const notesArray = [newNote, ...notes];

    setnotes([newNote, ...notes]);

    localStorage.setItem("notes", JSON.stringify(notesArray));
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;

    setSearch(query);
  }

  const filteredNotes =
    search !== ""
      ? notes.filter((note) =>
          note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
        )
      : notes;

  return (
    <div className="mx-auto my-12 max-w-6xl space-y-6 px-5">
      <img src={logo} alt="Logo NLW Expert" />
      <form className="w-full border-b border-slate-700 pb-6">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          onChange={handleSearch}
          className="w-full bg-transparent text-xl font-semibold tracking-tight outline-none placeholder:text-slate-500 md:text-3xl"
        />
      </form>

      <div className="grid auto-rows-[250px] gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NewNoteCard onNoteCreated={onNoteCreated} />
        {filteredNotes.map((note) => {
          return <NoteCard key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}
