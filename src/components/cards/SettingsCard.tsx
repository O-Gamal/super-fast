import { cn } from '@/lib/utils';
import NewTaskForm from '../NewTaskForm';
import Card from '../ui/Card';

const SettingsCard = ({
  showSettings,
  setShowSettings,
}: {
  showSettings: boolean;
  setShowSettings: (show: boolean) => void;
}) => {
  // theme (app + priority colors)
  // name
  return (
    <Card
      title='Settings'
      close={() => setShowSettings(false)}
      className={cn(
        'group w-[calc(33%-16px)] p-4 bg-primary-lighter absolute top-4 left-4 bottom-4 z-50',
        showSettings
          ? 'translate-x-0 opacity-100 transition-[transition/opacity] delay-75 duration-200'
          : '-translate-x-[100%] opacity-0 transition-[transition/opacity] duration-200'
      )}
    >
      <NewTaskForm />
      <button
        className='absolute bottom-4 left-4 right-4 rounded-lg p-3 text-white bg-primary-default'
        onClick={() => setShowSettings(false)}
      >
        Apply Settings
      </button>
    </Card>
  );
};
export default SettingsCard;
