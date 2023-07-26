import {
  CalendarIcon,
  Cog6ToothIcon,
  Squares2X2Icon,
  ForwardIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import Greeting from './Greeting';
import Nav from './Nav';
import { useStore } from '@/store/mainStore';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import SettingsCard from './cards/SettingsCard';
import { useNavigate } from 'react-router-dom';

const navElements = [
  {
    id: 0,
    icon: <SparklesIcon className='w-4 h-4 stroke-2' aria-hidden />,
    title: 'Today',
    route: '',
    count: 6,
  },
  {
    id: 1,
    icon: <ForwardIcon className='w-4 h-4 stroke-2' aria-hidden />,
    title: 'Tomorrow',
    route: 'tomorrow',
    count: 2,
  },
  {
    id: 2,
    icon: <Squares2X2Icon className='w-4 h-4 stroke-2' aria-hidden />,
    title: 'All Tasks',
    route: 'all-tasks',
    count: 10,
  },
];

const SideMenu = ({ activeTab }: { activeTab: string }) => {
  const [showSettings, setShowSettings] = useState(false);
  const userName = useStore.use.userName();

  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case '1':
          navigate('/');
          break;
        case '2':
          navigate('?tab=tomorrow');
          break;
        case '3':
          navigate('/?tab=all-tasks');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  function onOpenSettings() {
    setShowSettings(true);
  }

  return (
    <>
      <section
        className={cn(
          'rounded-2xl bg-primary-lighter pt-6 pb-4 px-4 flex flex-col justify-between animate-[side-menu-animate-in_300ms]',
          showSettings
            ? '-translate-x-4 scale-90 transition-[transition/scale] duration-200'
            : 'translate-x-0 scale-100 transition-[transition/scale] delay-75 duration-200'
        )}
      >
        <div className='flex flex-col  gap-10'>
          <div className='flex justify-between items-start text-gray-400 px-1'>
            <Greeting userName={userName} />
            <button className='cursor-pointer' onClick={onOpenSettings}>
              <Cog6ToothIcon className='w-6 h-6 stroke-2 hover:rotate-6 transition-transform duration-200' />
            </button>
          </div>
          <Nav navElements={navElements} activeTab={activeTab} />
        </div>
        <button className='w-full button-primary rounded-lg flex justify-center gap-2 py-3'>
          <CalendarIcon className='w-4 h-4 stroke-2' aria-hidden />
          20 July, 2023
        </button>
      </section>
      <SettingsCard
        showSettings={showSettings}
        setShowSettings={setShowSettings}
      />
    </>
  );
};
export default SideMenu;
