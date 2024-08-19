import { X, AtSign, Plus } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface InviteGuestsModalProps {
  toggleGuestsModal: () => void
  emailsToInvite: string[]
  removeEmailToInvites: (email: string) => void
  addNewEmailToInvite: (e: FormEvent<HTMLFormElement>) => void
}

export function InviteGuestsModal({ toggleGuestsModal, emailsToInvite, removeEmailToInvites, addNewEmailToInvite }: InviteGuestsModalProps) {

  return (<div className="flex items-center justify-center fixed inset-0 bg-black/60 ">
    <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 py-5 px-6 shadow-shape">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2>Selecionar convidados</h2>
          <button>
            <X
              className="size-5 text-zinc-400"
              onClick={toggleGuestsModal}
            />
          </button>
        </div>
        <p className="text-sm text-zinc-400">
          Os convidados irão receber e-mails para confirmar a participação
          na viagem.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {emailsToInvite.map((email) => (
          <div
            key={email}
            className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
          >
            <span className="text-zinc-300">{email}</span>
            <button onClick={() => removeEmailToInvites(email)}>
              <X className="size-4 text-zinc-400" />
            </button>
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-zinc-800" />

      <form
        onSubmit={addNewEmailToInvite}
        className="p-2.5 flex items-center bg-zinc-950 border border-zinc-800 rounded-lg gap-2"
      >
        <div className="px-2 flex items-center flex-1 gap-2">
          <AtSign className="size-5 text-zinc-400" />
          <input
            type="email"
            name="email"
            id=""
            className="text-lg placeholder-zinc-400
                outline-none flex-1 bg-transparent"
            placeholder="Digite o e-mail do convidado"
          />
        </div>
        <Button
          type="submit"
        >
          Convidado <Plus className="size-5" />
        </Button>
      </form>
    </div>
  </div>
  )
}