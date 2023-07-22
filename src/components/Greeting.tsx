const Greeting = ({ userName }: { userName: string }) => {
  return (
    <h1 className='text-2xl font-medium'>
      Hello,
      <span className='block font-semibold text-black'>{userName}</span>
    </h1>
  );
};
export default Greeting;
