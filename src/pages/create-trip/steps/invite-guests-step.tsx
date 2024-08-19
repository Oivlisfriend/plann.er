import { UserRoundPlus, ArrowRight } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestStepProps {
  toggleGuestsModal: () => void;
  toggleGuestsConfirmTripModal: () => void;
  emailsToInvite: string[];
}

export function InviteGuestsStep({
  emailsToInvite,
  toggleGuestsConfirmTripModal,
  toggleGuestsModal }: InviteGuestStepProps) {
  return (
    <div className="h-16 bg-zinc-900 rounded-xl px-4 text-center flex gap-3 items-center shadow-shape">
      <button
        type="button"
        onClick={toggleGuestsModal}
        className="flex items-center gap-2 flex-1"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length < 0 ? (
          <span className="text-left text-lg text-zinc-400  flex-1">
            Quem estará na viagem?
          </span>
        ) : (
          <span className="text-left text-lg text-zinc-400  flex-1">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        )}
      </button>

      <Button
        type="button"
        onClick={toggleGuestsConfirmTripModal}
      >
        Confirmar viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  )
}