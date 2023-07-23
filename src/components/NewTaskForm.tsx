const NewTaskForm = () => {
  return (
    <form className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          id='title'
          className='border border-gray-300 rounded-md p-2'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='time'>Expected time to finish</label>
        <input
          type='text'
          id='time'
          className='border border-gray-300 rounded-md p-2'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='date'>Date</label>
        <input
          type='date'
          id='date'
          className='border border-gray-300 rounded-md p-2'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='priority'>Priority</label>
        <select
          name='priority'
          id='priority'
          className='border border-gray-300 rounded-md p-2'
        >
          <option value='HIGH'>High</option>
          <option value='MEDIUM'>Medium</option>
          <option value='LOW'>Low</option>
        </select>
      </div>
    </form>
  );
};
export default NewTaskForm;
