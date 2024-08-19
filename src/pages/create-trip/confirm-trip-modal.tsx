import { X, User } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface InviteGuestsModalProps {
  createTrip: (e: FormEvent<HTMLFormElement>) => void
  toggleGuestsConfirmTripModal: () => void
}

export function ConfirmTripModal({
  createTrip,
  toggleGuestsConfirmTripModal
}: InviteGuestsModalProps) {

  return (
    <div className="flex items-center justify-center fixed inset-0 bg-black/60 ">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 py-5 px-6 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2>Confirmar criação de viagem</h2>
            <button>
              <X
                className="size-5 text-zinc-400"
                onClick={toggleGuestsConfirmTripModal}
              />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{" "}
            <span className="font-semibold text-zinc-100">
              {" "}
              Florianópolis, Brasil
            </span>{" "}
            nas datas de{" "}
            <span className="font-semibold text-zinc-100">
              16 a 27 de Agosto de 2024
            </span>{" "}
            preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="h-14 px-4 flex items-center bg-zinc-950 border border-zinc-800 rounded-lg gap-2">
            <User className="size-5 text-zinc-400" />
            <input
              type="text"
              name="name"
              id=""
              className="text-lg placeholder-zinc-400
                outline-none flex-1 bg-transparent"
              placeholder="Seu nome completo"
            />
          </div>
          <div className="h-14 px-4 flex items-center bg-zinc-950 border border-zinc-800 rounded-lg gap-2">
            <User className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              id=""
              className="text-lg placeholder-zinc-400
                outline-none flex-1 bg-transparent"
              placeholder="Seu e-mail pessoal"
            />
          </div>
          <Button
            type="submit"
            size="full"
          >
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  )
}