import { BUTTON_STYLES, EXERCISE_CARD_STYLES } from '@/app/(styles)';
import { useState } from 'react';

interface ModalProps {
    children: React.ReactNode;
    openModalButton?: React.ReactNode;
}

export default function Modal({ children, openModalButton }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
     

    {
        openModalButton === undefined 
            ? (
                <button onClick={handleOpen} className="py-2 px-4 bg-blue-500 text-white rounded">Open Modal</button>
            )
            : (
                <div onClick={handleOpen}>{openModalButton}</div>
            )
    }

      {isOpen && (
        <div className={`fixed z-10 inset-0 overflow-y-auto text-[#fff] `}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className={`inline-block align-bottom bg-[#464646] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full`}>
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {children}
              </div>
              <div className="bg-[#464646] px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button 
                  type="button" 
                  onClick={handleClose} 
                  className={`mt-3 w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 text-base font-medium sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm ${BUTTON_STYLES}`}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}