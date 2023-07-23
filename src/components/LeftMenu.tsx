import {
  CalendarIcon,
  Cog6ToothIcon,
  Squares2X2Icon,
  ForwardIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import Greeting from './Greeting';
import Nav from './Nav';

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

const LeftMenu = ({ activeTab }: { activeTab: string }) => {
  return (
    <section className='rounded-2xl bg-[#F2F4F6] pt-6 pb-4 px-4 flex flex-col justify-between'>
      <div className='flex flex-col  gap-10'>
        <div className='flex justify-between items-start text-[#AAAAAE] px-1'>
          <Greeting userName='Omar' />
          <button className='cursor-pointer'>
            <Cog6ToothIcon className='w-6 h-6 stroke-2 hover:rotate-6 transition-transform duration-200' />
          </button>
        </div>
        <Nav navElements={navElements} activeTab={activeTab} />
      </div>
      <button className='w-full text-primary-default button-primary rounded-lg flex justify-center gap-2 py-3'>
        <CalendarIcon className='w-4 h-4 stroke-2' aria-hidden />
        20 July, 2023
      </button>
    </section>
  );
};
export default LeftMenu;
