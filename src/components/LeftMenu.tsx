import Greeting from './Greeting';
import Nav from './Nav';

const navElements = [
  {
    id: 0,
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='21'
        height='21'
        viewBox='0 0 21 21'
        fill='none'
      >
        <path
          d='M4.375 2.625V6.125M2.625 4.375H6.125M5.25 14.875V18.375M3.5 16.625H7M11.375 2.625L13.375 8.625L18.375 10.5L13.375 12.375L11.375 18.375L9.375 12.375L4.375 10.5L9.375 8.625L11.375 2.625Z'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    title: 'Today',
    count: 6,
  },
  {
    id: 1,
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='19'
        height='21'
        viewBox='0 0 19 21'
        fill='none'
      >
        <path
          d='M6.33333 6.33333V3M12.6667 6.33333V3M5.54167 9.66667H13.4583M3.95833 18H15.0417C15.9161 18 16.625 17.2538 16.625 16.3333V6.33333C16.625 5.41286 15.9161 4.66667 15.0417 4.66667H3.95833C3.08388 4.66667 2.375 5.41286 2.375 6.33333V16.3333C2.375 17.2538 3.08388 18 3.95833 18Z'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    title: 'Tomorrow',
    count: 2,
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='21'
        viewBox='0 0 20 21'
        fill='none'
      >
        <path
          d='M7.49999 4.66667H5.83332C4.91285 4.66667 4.16666 5.41286 4.16666 6.33333V16.3333C4.16666 17.2538 4.91285 18 5.83332 18H14.1667C15.0871 18 15.8333 17.2538 15.8333 16.3333V6.33333C15.8333 5.41286 15.0871 4.66667 14.1667 4.66667H12.5M7.49999 4.66667C7.49999 5.58714 8.24618 6.33333 9.16666 6.33333H10.8333C11.7538 6.33333 12.5 5.58714 12.5 4.66667M7.49999 4.66667C7.49999 3.74619 8.24618 3 9.16666 3H10.8333C11.7538 3 12.5 3.74619 12.5 4.66667M9.99999 10.5H12.5M9.99999 13.8333H12.5M7.49999 10.5H7.50832M7.49999 13.8333H7.50832'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
        />
      </svg>
    ),
    title: 'All Tasks',
    count: 10,
  },
];

interface LeftMenuProps {
  activeTab: number;
  setActiveTab: (id: number) => void;
}

const LeftMenu = ({ activeTab, setActiveTab }: LeftMenuProps) => {
  return (
    <section className='rounded-2xl bg-[#F2F4F6] pt-6 pb-4 px-4 flex flex-col justify-between'>
      <div className='flex flex-col  gap-10'>
        <div className='flex justify-between items-start text-[#AAAAAE] px-1'>
          <Greeting userName='Omar' />
          <button className='cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z'
                stroke='currentColor'
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z'
                stroke='currentColor'
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
        <Nav
          navElements={navElements}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <button className='w-full text-primary-default button-primary rounded-lg flex justify-center gap-2 py-3'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 21 22'
          fill='none'
        >
          <path
            d='M7 6.41667V2.75M14 6.41667V2.75M6.125 10.0833H14.875M4.375 19.25H16.625C17.5915 19.25 18.375 18.4292 18.375 17.4167V6.41667C18.375 5.40414 17.5915 4.58333 16.625 4.58333H4.375C3.4085 4.58333 2.625 5.40414 2.625 6.41667V17.4167C2.625 18.4292 3.4085 19.25 4.375 19.25Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        20 July, 2023
      </button>
    </section>
  );
};
export default LeftMenu;
