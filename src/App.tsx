import { useState } from 'react';
import LeftMenu from './components/LeftMenu';
import Tasks from './components/Tasks';
import { tasks } from './lib/data';

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const title = ["Today's Tasks", "Tomorrow's Tasks", 'All Tasks'];

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const todayTasks = tasks.filter(
    (task) =>
      task.date ===
      `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
  );

  const tomorrowTasks = tasks.filter(
    (task) =>
      task.date ===
      `${tomorrow.getDate()}/${
        tomorrow.getMonth() + 1
      }/${tomorrow.getFullYear()}`
  );

  const filteredTasks = [todayTasks, tomorrowTasks, tasks];

  const lists = [
    {
      id: 1,
      title: 'High Priority',
      tasks: filteredTasks[activeTab].filter(
        (task) => task.priority === 'HIGH'
      ),
      expanded: true,
    },
    {
      id: 2,
      title: 'Medium Priority',
      tasks: filteredTasks[activeTab].filter(
        (task) => task.priority === 'MEDIUM'
      ),
      expanded: true,
    },
    {
      id: 3,
      title: 'Low Priority',
      tasks: filteredTasks[activeTab].filter((task) => task.priority === 'LOW'),
      expanded: true,
    },
  ];

  return (
    <main className='min-h-screen w-full bg-[#EEEDF2] flex items-center justify-center p-8'>
      <section className='w-full max-w-4xl h-[710px] bg-[#F7F8FF] rounded-3xl shadow-primary p-4 grid grid-cols-3 gap-4'>
        <LeftMenu activeTab={activeTab} setActiveTab={setActiveTab} />
        <section className='rounded-2xl col-span-2 py-6 px-4'>
          <div className='flex items-center justify-between mb-10'>
            <h2 className='text-xl font-medium text-primary-default'>
              {title[activeTab]}
            </h2>
            <button className='text-primary-default flex items-center gap-2 px-4 py-2 button-primary rounded-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='13'
                height='14'
                viewBox='0 0 13 14'
                fill='none'
              >
                <path
                  d='M6.5 1.5V12.5M12 7L1 7'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              Add New
            </button>
          </div>
          <Tasks lists={lists} />
        </section>
      </section>
    </main>
  );
}

export default App;
