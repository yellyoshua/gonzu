import { useState } from "react";
import { FloatButton } from "@/app/components/FloatButton";
import { Modal } from "@/app/components/Modal";
import BeakerIcon from "@heroicons/react/outline/BeakerIcon";
import { DarkModeSwitch } from "../../components/DarkModeSwitch";

interface SiteConfigModalProps {}

export const SiteConfigModal = ({}: SiteConfigModalProps) => {
  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = () => setShowModal(false);

  const showModalHandler = () => setShowModal(true);

  const renderContent = () => (
    <div className="w-full mt-2 sm:mt-5">
      <p className="font-jost font-bold text-sm text-black">Modo oscuro:</p>
      <DarkModeSwitch />
    </div>
  );

  return (
    <div>
      <Modal
        show={showModal}
        title="Configuración del sitio"
        content={renderContent()}
        handlers={{
          onPressCancel: {
            handler: closeModalHandler,
            label: "Cerrar",
          },
        }}
      />
      <FloatButton
        onClick={showModalHandler}
        className="animate-bounce shadow-lg transition-all bg-red-700 rounded-full w-10 h-10 flex items-center text-white hover:text-red-700 justify-center hover:bg-white border-2 border-red-700"
      >
        <BeakerIcon className="" width={25} height={25} />
      </FloatButton>
    </div>
  );
};
