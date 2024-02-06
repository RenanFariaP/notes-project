export function NewNoteCard(){
    return(
        <button className="rounded-md flex flex-col text-justify bg-slate-700 p-5 space-y-3 overflow-hidden hover:ring-slate-600 outline-none focus-visible:ring-2 focus-visible:ring-lime-400">
          <span className=" text-sm font-medium text-slate-200">
            Adicionar nota
          </span>
          <p className="text-sm leading-6 font-normal text-slate-400">
            Grave uma nota em áudio que será convertida para texto
            automaticamente.
          </p>
        </button> 
    )
}