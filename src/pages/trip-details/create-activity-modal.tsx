import { X, Tag, Calendar } from "lucide-react";
import { Button } from "../../components/button";

interface CreateActivityModalProps {
    toggleCreateActivityModalOpen: () => void;
}

export function CreateActivityModal({ toggleCreateActivityModalOpen }: CreateActivityModalProps) {

    return (
        <div className="flex items-center justify-center fixed inset-0 bg-black/60 ">
            <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 py-5 px-6 shadow-shape">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h2>Cadastra actividade</h2>
                        <button>
                            <X
                                className="size-5 text-zinc-400"
                                onClick={toggleCreateActivityModalOpen}
                            />
                        </button>
                    </div>
                    <p className="text-sm text-zinc-400">Todos convidados podem visualizar as actividades.</p>
                </div>

                <form className="space-y-3">
                    <div className="h-14 px-4 flex items-center bg-zinc-950 border border-zinc-800 rounded-lg gap-2">
                        <Tag className="size-5 text-zinc-400" />
                        <input
                            type="text"
                            name="title"
                            id=""
                            className="text-lg placeholder-zinc-400
                outline-none flex-1 bg-transparent"
                            placeholder="Qual a actividade?"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-14 px-4 flex-1 flex items-center bg-zinc-950 border border-zinc-800 rounded-lg gap-2">
                            <Calendar className="size-5 text-zinc-400" />
                            <input
                                type="datetime-local"
                                name="occus_at"
                                id=""
                                className="text-lg placeholder-zinc-400
                  outline-none flex-1 bg-transparent [color-scheme:dark]"
                                placeholder="Data e horário da actividade"
                            />
                        </div>
                    </div>

                    <Button size="full" type="submit">
                        Salvar activiade
                    </Button>
                </form>
            </div>
        </div >
    )
}

