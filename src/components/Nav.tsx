import { cn } from '@/lib/utils';

interface NavProps {
  navElements: {
    id: number;
    icon: JSX.Element;
    title: string;
    count: number;
  }[];
  activeTab: number;
  setActiveTab: (id: number) => void;
}

const Nav = ({ navElements, activeTab, setActiveTab }: NavProps) => {
  return (
    <nav>
      <ul className='mt-8 space-y-3'>
        {navElements.map((navElement) => (
          <li
            key={navElement.id}
            className={cn(
              'flex items-center justify-between p-2 rounded-md cursor-pointer ring-gray-200',
              activeTab === navElement.id ? 'bg-[#EDEDF6]' : 'hover:ring-1'
            )}
            onClick={() => setActiveTab(navElement.id)}
          >
            <div className='flex items-center gap-3'>
              <div
                className={cn(
                  activeTab === navElement.id
                    ? 'text-[#7374EC]'
                    : 'text-[#AAAAAE]'
                )}
              >
                {navElement.icon}
              </div>
              <h2 className={'text-sm font-medium text-black'}>
                {navElement.title}
              </h2>
            </div>
            <div className='flex justify-between'>
              <p
                className={cn(
                  'text-xs bg-[#E9E9F0] w-6 h-6 flex items-center justify-center rounded text-[#AAAAAE]',
                  activeTab === navElement.id && 'text-[#7374EC] bg-white'
                )}
              >
                {navElement.id}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;
