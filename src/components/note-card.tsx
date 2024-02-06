export function NoteCard() {
  return (
    <button className="relative flex flex-col rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden hover:ring-2 hover:ring-slate-600 outline-none focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className=" text-sm font-medium text-slate-300">Há 2 dias</span>
      <p className="text-sm text-justify leading-6 font-normal text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        sed maiores maxime, sint itaque quam exercitationem, voluptas
        repellendus eligendi nemo in fugit officiis ratione, blanditiis deserunt
        nam unde veniam. Aut?
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
}
