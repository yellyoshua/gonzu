import AdjustmentsIcon from "@heroicons/react/outline/AdjustmentsIcon";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface ModalProps {
  show?: boolean;
  title: string;
  iconElement?: React.ReactNode;
  content: React.ReactNode;
  handlers: {
    onPressDone?: { label: string; handler: () => void } | null;
    onPressCancel: { label: string; handler: () => void };
  };
}

export const Modal = ({
  show = true,
  title,
  iconElement,
  content,
  handlers: { onPressDone, onPressCancel },
}: ModalProps) => {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={onPressCancel.handler}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          />
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="w-full inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="dark:bg-darkPrimary bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full dark:bg-red-600 bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    {iconElement ?? (
                      <AdjustmentsIcon
                        className="h-6 w-6 dark:text-white text-red-600"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="mt-3 flex-1 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium dark:text-white text-darkPrimaryBold"
                    >
                      {title}
                    </Dialog.Title>
                    <div className="mt-2">{content}</div>
                  </div>
                </div>
              </div>
              <div className="dark:bg-darkPrimaryBold bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={onPressCancel.handler}
                >
                  {onPressCancel.label}
                </button>
                {onPressDone && (
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={onPressDone.handler}
                  >
                    {onPressDone.label}
                  </button>
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
