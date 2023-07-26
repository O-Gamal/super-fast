import { cn } from '@/lib/utils';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Card = ({
  className,
  title,
  noCloseIcon,
  close,
  children,
}: {
  className?: string;
  title?: string;
  close: () => void;
  noCloseIcon?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <section className={cn('rounded-2xl shadow-primary', className)}>
      {title && (
        <div className='flex items-center justify-between mb-6'>
          <h3 className='text-xl'>{title}</h3>
          {!noCloseIcon && (
            <button
              onClick={close}
              className='text-gray-400 hover:text-gray-500'
            >
              <XMarkIcon className='w-5 h-5 stroke-2' />
            </button>
          )}
        </div>
      )}
      {children}
      {/* backdrop */}
    </section>
  );
};
export default Card;
