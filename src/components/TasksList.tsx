import { cn } from '@/lib/utils';
import { List } from '@/types/task';

interface TasksListProps {
  list: List;
}

const TasksList = ({ list }: TasksListProps) => {
  // function onShowHideList(list: List) {
  //   setTaskLists([
  //     ...taskLists.filter((taskList) => taskList.id !== list.id),
  //     {
  //       ...list,
  //       expanded: !list.expanded,
  //     },
  //   ]);
  // }

  return (
    <section key={list.id} className='mb-5'>
      <div className='flex justify-between items-center text-gray-400 mb-3 px-4'>
        <p
          className='text-sm cursor-pointer select-none'
          // onClick={() => onShowHideList(list)}
        >
          {list.title}
        </p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 15 15'
          fill='none'
          className={cn(
            'cursor-pointer transition-transform duration-200',
            !list.expanded ? '-rotate-90' : 'rotate-0'
          )}
          // onClick={() => onShowHideList(list)}
        >
          <path
            d='M11.875 5.625L7.5 10L3.125 5.625'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
      {list.expanded && (
        <div className='bg-[#F2F4F6] rounded-lg flex flex-col gap-4 p-4'>
          {list.tasks.map((task) => (
            <div key={task.id} className='flex justify-between items-center'>
              <div className='flex items-center gap-4'>
                <div
                  className={cn(
                    `w-2.5 h-2.5 rounded-full cursor-pointer ring-1`,
                    list.id === 1
                      ? 'ring-high-priority hover:bg-high-priority/10'
                      : list.id === 2
                      ? 'ring-medium-priority hover:bg-medium-priority/10'
                      : 'ring-low-priority hover:bg-low-priority/10'
                  )}
                ></div>
                <p className='text-sm'>{task.title}</p>
              </div>
              <p className='text-xs text-gray-400 flex items-start gap-1'>
                {task.expectedTimeToFinish} mins
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
export default TasksList;
