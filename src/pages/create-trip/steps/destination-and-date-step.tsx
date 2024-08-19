import { MapPin, Calendar, Settings2, ArrowRight } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationAndDateStepProps {
  toggleGuestsInput: () => void
  isGuetsInputOpen: boolean
}
export function DestinationAndDateStep({
  toggleGuestsInput,
  isGuetsInputOpen
}: DestinationAndDateStepProps) {

  return (
    <div className="h-16 bg-zinc-900 rounded-xl px-4 text-center flex gap-3 items-center shadow-shape">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          type="text"
          disabled={isGuetsInputOpen}
          placeholder="Para onde você vai?"
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
          type="text"
          disabled={isGuetsInputOpen}
          placeholder="Quando?"
        />
      </div>

      <div className="w-px h-6 bg-zinc-800" />
      {isGuetsInputOpen ? (
        <Button
          onClick={toggleGuestsInput}
          variant="secondary"
        >
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button
          type="button"
          onClick={toggleGuestsInput}
        >
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  )
}