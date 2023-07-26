import { useEffect, useState } from 'react';
import Modal from '../ui/Modal';
import { useStore } from '@/store/mainStore';

const UserNameModal = () => {
  const [showUpdateUserNameModal, setShowUpdateUserNameModal] = useState(false);
  const updateName = useStore.use.updateUserName();

  const onUpdateUserName = (
    e: React.MouseEvent<HTMLFormElement, MouseEvent>
  ) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    updateName(data.username as string);
    setShowUpdateUserNameModal(false);
  };

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem('APP_USERNAME') === null) {
        setShowUpdateUserNameModal(true);
      } else {
        setShowUpdateUserNameModal(false);
      }
    }, 1000);
  }, [showUpdateUserNameModal]);

  return (
    <Modal
      open={showUpdateUserNameModal}
      onOpenChange={setShowUpdateUserNameModal}
    >
      <Modal.Content noCloseIcon>
        <form onClick={onUpdateUserName}>
          <label
            htmlFor='username'
            className='block font-medium text-lg text-primary-default mb-4'
          >
            What should we call you?
          </label>
          <div className='flex items-center gap-4'>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='e.g. Mostafa'
              className='w-full px-4 py-3 rounded-md bg-[#F2F4F6] ring-1 ring-gray-200 text-gray-500'
            />
            <button
              type='submit'
              className='text-white px-6 py-3 rounded-md bg-primary-default hover:bg-primary-default/95 transition-colors duration-200'
            >
              Save
            </button>
          </div>
        </form>
      </Modal.Content>
    </Modal>
  );
};
export default UserNameModal;
