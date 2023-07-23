import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface NavProps {
  navElements: {
    id: number;
    icon: JSX.Element;
    title: string;
    count: number;
    route: string;
  }[];
  activeTab: string;
}

const Nav = ({ navElements, activeTab }: NavProps) => {
  return (
    <nav>
      <ul className='mt-8 space-y-3'>
        {navElements.map((navElement) => (
          <Link
            key={navElement.id}
            to={navElement.route && '?tab=' + navElement.route}
            className='block'
          >
            <li
              className={cn(
                'flex items-center justify-between p-3 rounded-md cursor-pointer ring-gray-200',
                activeTab === navElement.route
                  ? 'bg-[#EDEDF6] text-[#7374EC]'
                  : 'hover:ring-1 text-[#AAAAAE]'
              )}
            >
              <div className='flex items-center gap-2'>
                <div>{navElement.icon}</div>
                <h2 className={'text-sm font-medium'}>{navElement.title}</h2>
              </div>
              <div className='flex justify-between'>
                <p
                  className={cn(
                    'text-xs bg-[#E9E9F0] w-6 h-6 flex items-center justify-center rounded text-[#AAAAAE]',
                    activeTab === navElement.route && 'text-[#7374EC] bg-white'
                  )}
                >
                  {navElement.id}
                </p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;
