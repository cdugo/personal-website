import { useState } from 'react'
import { Dialog } from '@headlessui/react'

const JourneyCard = ({isOpen, setIsOpen, item}) => {

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="h-full rounded text-center bg-[#1B1B1B] shadow-black shadow-xl p-5 overflow-y-auto">
            <Dialog.Title className="text-white">{item.cardTitle} </Dialog.Title>
            <p className="text-gray-500">• {item.cardSubtitle}</p>
            <p>
                {item.cardDetailedText}
            </p>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}

export default JourneyCard