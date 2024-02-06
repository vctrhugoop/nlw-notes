import logo from "./assets/logo-nlw.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

export function App() {
  return (
    <div className="mx-auto my-12 max-w-6xl space-y-6">
      <img src={logo} alt="Logo NLW Expert" />
      <form className="w-full border-b border-slate-700 pb-6">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="grid auto-rows-[250px] grid-cols-3 gap-6 ">
        <NewNoteCard />
        <NoteCard
          note={{
            date: new Date(),
            content: "Hello World",
          }}
        />
      </div>
    </div>
  );
}
