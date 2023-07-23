import { cn } from '@/lib/utils';

interface TaskItemProps {
  title: string;
  expectedTimeToFinish: number;
  priority: string;
}
const TaskItem = ({ title, expectedTimeToFinish, priority }: TaskItemProps) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-4'>
        <div
          className={cn(
            `w-2.5 h-2.5 rounded-full cursor-pointer ring-1`,
            priority === 'high'
              ? 'ring-high-priority hover:bg-high-priority/10'
              : priority === 'medium'
              ? 'ring-medium-priority hover:bg-medium-priority/10'
              : 'ring-low-priority hover:bg-low-priority/10'
          )}
        ></div>
        <p className='text-sm text-gray-700'>{title}</p>
      </div>
      <p className='text-xs text-gray-400 flex items-start gap-1 select-none'>
        {expectedTimeToFinish} mins
      </p>
    </div>
  );
};
export default TaskItem;
