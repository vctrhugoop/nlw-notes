export function NewNoteCard() {
  return (
    <div className="space-y-3 rounded-md bg-slate-700 p-5">
      <span className="text-sm/5 font-medium text-slate-200">
        Adicionar nota
      </span>
      <p className="text-sm leading-6 text-slate-400">
        Grave uma nota em áudio que será convertida para texto automaticamente.
      </p>
    </div>
  );
}
