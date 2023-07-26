import { PlusIcon } from '@heroicons/react/24/outline';
import Tasks from './Tasks';
import NewTaskForm from './NewTaskForm';
import { tasks } from '@/lib/data';
import Card from './ui/Card';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const MainArea = ({ activeTab }: { activeTab: string }) => {
  const [showNewTaskCard, setShowNewTaskCard] = useState(false);

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  let title, filteredTasks;
  switch (activeTab) {
    case 'all-tasks':
      title = `All Tasks`;
      filteredTasks = tasks;
      break;
    case 'tomorrow':
      title = `Tomorrow's Tasks`;
      filteredTasks = tasks.filter(
        (task) =>
          task.date ===
          `${tomorrow.getDate()}/${
            tomorrow.getMonth() + 1
          }/${tomorrow.getFullYear()}`
      );
      break;
    default:
      title = `Today's Tasks`;
      filteredTasks = tasks.filter(
        (task) =>
          task.date ===
          `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
      );
      break;
  }

  return (
    <section className='rounded-2xl col-span-2 py-6 px-4 relative'>
      <div className='flex items-center justify-between mb-10'>
        <h2 className='text-xl font-medium text-primary-default animate-[main-area-header-item-animate-in_300ms]'>
          {title}
        </h2>

        <button
          className='text-sm flex items-center gap-2 px-4 py-2 button-primary rounded-md animate-[main-area-header-item-animate-in_300ms_100ms_both]'
          onClick={() => setShowNewTaskCard(true)}
        >
          <PlusIcon className='w-4 h-4 stroke-2' aria-hidden />
          Add New
        </button>
      </div>
      <Tasks tasks={filteredTasks} />
      <Card
        title='Create a new task'
        close={() => setShowNewTaskCard(false)}
        className={cn(
          'group w-1/2 p-4 bg-gray-900 text-white absolute h-full right-0 bottom-0 shadow-md z-50',
          showNewTaskCard
            ? 'translate-x-0 opacity-100 transition-[transition/opacity] duration-200'
            : 'translate-x-[100%] opacity-0 transition-[transition/opacity] delay-200 duration-200'
        )}
      >
        <NewTaskForm />
        <button onClick={() => setShowNewTaskCard(false)}>Done</button>
      </Card>
    </section>
  );
};
export default MainArea;
