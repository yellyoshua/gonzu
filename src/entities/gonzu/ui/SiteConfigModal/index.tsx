import { useState } from "react";
import { FloatButton } from "@/app/components/FloatButton";
import { Modal } from "@/app/components/Modal";
import BeakerIcon from "@heroicons/react/outline/BeakerIcon";
import { DarkModeSwitch } from "../../components/DarkModeSwitch";
import { CelebrationsRadioPicker } from "../../components/CelebrationsRadioPicker";
import { SongsRadioPicker } from "../../components/SongsRadioPicker";
import { useMedia } from "react-use";

interface SiteConfigModalProps {}

export const SiteConfigModal = ({}: SiteConfigModalProps) => {
  const [showModal, setShowModal] = useState(false);
  const isMDBreakpoint = useMedia("(min-width: 768px)", true);

  const closeModalHandler = () => setShowModal(false);

  const showModalHandler = () => setShowModal(true);

  const renderContent = () => (
    <div className="w-full sm:mt-5">
      <p className="my-2 font-jost font-bold text-sm text-black">
        Celebraci&oacute;n de fondo:
      </p>
      <CelebrationsRadioPicker />
      <p className="my-2 font-jost font-bold text-sm text-black">
        M&uacute;sica de fondo:
      </p>
      <SongsRadioPicker />
      <p className="my-2 font-jost font-bold text-sm text-black">
        Modo oscuro:
      </p>
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
        className={`animate-bounce shadow-lg transition-all ${
          isMDBreakpoint
            ? "bg-red-700 text-white hover:text-red-700 hover:bg-white"
            : "bg-white text-red-700 hover:text-white hover:bg-red-700"
        } border-red-700 rounded-full w-10 h-10 flex items-center justify-center border-2`}
      >
        <BeakerIcon className="" width={25} height={25} />
      </FloatButton>
    </div>
  );
};
