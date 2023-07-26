import * as Dialog from '@radix-ui/react-dialog';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';

export default function Modal({
  open,
  onOpenChange,
  children,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
}

function ModalContent({
  title,
  noCloseIcon,
  children,
}: {
  title?: string;
  noCloseIcon?: boolean;
  children: ReactNode;
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className='fixed inset-0 bg-black/50 data-[state=closed]:animate-[dialog-overlay-hide_200ms] data-[state=open]:animate-[dialog-overlay-show_200ms]' />
      <Dialog.Content className='fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-10 text-gray-900 shadow data-[state=closed]:animate-[dialog-content-hide_200ms] data-[state=open]:animate-[dialog-content-show_200ms]'>
        {title && (
          <div className='flex items-center justify-between mb-6'>
            <Dialog.Title className='text-xl'>{title}</Dialog.Title>
            {!noCloseIcon && (
              <Dialog.Close className='text-gray-400 hover:text-gray-500'>
                <XMarkIcon className='w-5 h-5 stroke-2' />
              </Dialog.Close>
            )}
          </div>
        )}

        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}

Modal.Button = Dialog.Trigger;
Modal.Close = Dialog.Close;
Modal.Content = ModalContent;
