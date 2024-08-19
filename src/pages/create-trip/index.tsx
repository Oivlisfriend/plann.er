import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite-guests-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuestsStep } from "./steps/invite-guests-step";

export function CreateTripPage() {
  const navigate = useNavigate();

  const [isGuetsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuetsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState([
    "jessica.white44@yahoo.com",
  ]);

  function addNewEmailToInvite(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) return;

    if (emailsToInvite.includes(email)) return;
    setEmailsToInvite((prev) => [...prev, email]);
    e.currentTarget.reset();
  }

  function toggleGuestsInput() {
    setIsGuestsInputOpen((prev) => (prev = !prev));
  }

  function toggleGuestsConfirmTripModal() {
    setIsConfirmTripModalOpen((prev) => (prev = !prev));
  }

  function toggleGuestsModal() {
    setIsGuestsModalOpen((prev) => (prev = !prev));
  }

  function removeEmailToInvites(email: string) {
    setEmailsToInvite((prev) => prev.filter((e) => e !== email));
  }

  function createTrip(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    navigate('/trips/123')
  }

  return (
    <div className="h-screen flex justify-center items-center bg-pattern bg-center bg-no-repeat">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col gap-3 items-center">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide os seus amigos e planeje a sua próxima viagem!
          </p>
        </div>
        <div className="space-y-4">
         <DestinationAndDateStep 
         isGuetsInputOpen={isGuetsInputOpen} 
         toggleGuestsInput={toggleGuestsInput}/>

          {isGuetsInputOpen && (
          <InviteGuestsStep 
          emailsToInvite={emailsToInvite} 
          toggleGuestsConfirmTripModal={toggleGuestsConfirmTripModal}  
          toggleGuestsModal={toggleGuestsModal}/>
          )}
        </div>
        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com os nossos{" "}
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>{" "}
          e{" "}
          <a href="#" className="text-zinc-300 underline">
            politicas de privacidade
          </a>
        </p>
      </div>
      {isGuetsModalOpen && (
       <InviteGuestsModal 
        removeEmailToInvites={removeEmailToInvites}
        emailsToInvite={emailsToInvite}
        toggleGuestsModal={toggleGuestsModal}
        addNewEmailToInvite={addNewEmailToInvite}
       />
      )}

      {isConfirmTripModalOpen && (
       <ConfirmTripModal
        toggleGuestsConfirmTripModal={toggleGuestsConfirmTripModal}
        createTrip={createTrip}
        />
      )}
    </div>
  );
}
