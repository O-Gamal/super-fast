import LeftMenu from './components/LeftMenu';
import Tasks from './components/Tasks';
import { tasks } from './lib/data';
import Modal from './components/Modal';
import { useLocation } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/24/outline';
import NewTaskForm from './components/NewTaskForm';

function App() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tab = queryParams.get('tab');

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  let title, filteredTasks;
  switch (tab) {
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
    <main className='min-h-screen w-full bg-[#EEEDF2] flex items-center justify-center p-8'>
      <section className='w-full max-w-4xl h-[710px] bg-[#F7F8FF] rounded-3xl shadow-primary p-4 grid grid-cols-3 gap-4'>
        <LeftMenu activeTab={tab || ''} />
        <section className='rounded-2xl col-span-2 py-6 px-4'>
          <div className='flex items-center justify-between mb-10'>
            <h2 className='text-xl font-medium text-primary-default'>
              {title}
            </h2>
            <Modal>
              <Modal.Button asChild>
                <button className='text-primary-default text-sm flex items-center gap-2 px-4 py-2 button-primary rounded-md'>
                  <PlusIcon className='w-4 h-4 stroke-2' aria-hidden />
                  Add New
                </button>
              </Modal.Button>
              <Modal.Content title='Add New Task'>
                <NewTaskForm />
              </Modal.Content>
            </Modal>
          </div>
          <Tasks tasks={filteredTasks} />
        </section>
      </section>
    </main>
  );
}

export default App;
