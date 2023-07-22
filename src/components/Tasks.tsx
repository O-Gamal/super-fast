import { List } from '@/types/task';
import TasksList from './TasksList';

interface TasksProps {
  lists: List[];
}

const Tasks = ({ lists }: TasksProps) => {
  const highPriorityList = lists.find((list) => list.id === 1)!;
  const mediumPriorityList = lists.find((list) => list.id === 2)!;
  const lowPriorityList = lists.find((list) => list.id === 3)!;

  return (
    <section>
      {highPriorityList.tasks.length > 0 && (
        <TasksList list={highPriorityList} />
      )}
      {mediumPriorityList.tasks.length > 0 && (
        <TasksList list={mediumPriorityList} />
      )}
      {lowPriorityList.tasks.length > 0 && <TasksList list={lowPriorityList} />}
    </section>
  );
};
export default Tasks;
