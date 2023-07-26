import { useLocation } from 'react-router-dom';
import UserNameModal from './components/modals/UserNameModal';
import MainArea from './components/MainArea';
import SideMenu from './components/SideMenu';

function App() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tab = queryParams.get('tab');
  const activeTab = tab || '';

  return (
    <main className='min-h-screen w-full bg-primary-lighter flex items-center justify-center p-8'>
      <UserNameModal />
      <section className='w-full max-w-4xl h-[710px] bg-white rounded-3xl shadow-md p-4 grid grid-cols-3 gap-4 overflow-hidden relative'>
        <SideMenu activeTab={activeTab} />
        <MainArea activeTab={activeTab} />
      </section>
    </main>
  );
}

export default App;
