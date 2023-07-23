import { Task } from '@/types/task';
import ToggleList from './ToggleList';
import TaskItem from './Task';

interface TasksProps {
  tasks: Task[];
}
const Tasks = ({ tasks }: TasksProps) => {
  const lists = [
    {
      priority: 'high',
      title: 'High Priority',
      tasks: tasks?.filter((task) => task.priority === 'HIGH'),
    },
    {
      priority: 'medium',
      title: 'Medium Priority',
      tasks: tasks?.filter((task) => task.priority === 'MEDIUM'),
    },
    {
      priority: 'low',
      title: 'Low Priority',
      tasks: tasks?.filter((task) => task.priority === 'LOW'),
    },
  ];

  return (
    <ToggleList type='multiple' defaultValue={['high', 'medium', 'low']}>
      {lists.map((list) => (
        <>
          {list.tasks?.length > 0 && (
            <ToggleList.Item value={list.priority} title={list.title}>
              <div className='bg-[#F2F4F6] rounded-lg flex flex-col gap-4 p-4'>
                {list.tasks.map((task) => (
                  <TaskItem
                    key={task.id}
                    title={task.title}
                    expectedTimeToFinish={task.expectedTimeToFinish}
                    priority={list.priority}
                  />
                ))}
              </div>
            </ToggleList.Item>
          )}
        </>
      ))}
    </ToggleList>
  );
};
export default Tasks;
