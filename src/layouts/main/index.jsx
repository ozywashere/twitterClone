import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import Widgets from './widgets';
export default function MainLayout() {
  return (
    <div className='w-[1265px] mx-auto flex'>
      <Sidebar />
      <div className='flex-1 flex gap-[30px]'>
        <main className='max-w-[600px] flex-1 border-x-[1px] border-[#2f3336]'>
          <Outlet />
        </main>
        <Widgets />
      </div>
    </div>
  );
}
