import { Task } from '@/types/task';
import TaskItem from './Task';
import { Fragment } from 'react';
import ToggleList from './ui/ToggleList';
import { cn } from '@/lib/utils';

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
        <Fragment key={list.priority}>
          {list.tasks?.length > 0 && (
            <ToggleList.Item value={list.priority} title={list.title}>
              <div
                className={cn(
                  'bg-gray-100 rounded-lg flex flex-col gap-4 p-4',
                  list.priority === 'high' && 'bg-high-priority-light',
                  list.priority === 'medium' && 'bg-medium-priority-light',
                  list.priority === 'low' && 'bg-low-priority-light'
                )}
              >
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
        </Fragment>
      ))}
    </ToggleList>
  );
};
export default Tasks;
