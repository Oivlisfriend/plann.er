import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import ImportantLinks from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import DestinationAndDateHeaders from "./destination-and-date-header";
import { Button } from "../../components/button";

export function TripDetails() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)

  function toggleCreateActivityModalOpen() {
    setIsCreateActivityModalOpen(!isCreateActivityModalOpen)
  }

  return (
    <div className="max-w-6xl px-6 py-6 mx-auto space-y-8">
      <DestinationAndDateHeaders />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold ">Actividades</h2>

            <Button
              type="submit"
              onClick={toggleCreateActivityModalOpen}
            >
              <Plus className="size-5" />
              Cadastrar actividade
            </Button>
          </div>
          <Activities />
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks />
          <div className="w-full h-px bg-zinc-800" />
          <Guests />
        </div>

      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          toggleCreateActivityModalOpen={toggleCreateActivityModalOpen} />)
      }
    </div >
  );
}
