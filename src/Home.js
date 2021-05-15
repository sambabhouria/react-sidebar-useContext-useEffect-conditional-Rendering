import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Home = () => {
  const { openSidebar, openModal, isSidebarOpen, closeSidebar} = useGlobalContext();
  return (
    <main onClick={()=> {
      isSidebarOpen && closeSidebar();
    }}>
      <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>
      <button onClick={openModal} className='btn'>
        show modal
      </button>
    </main>
  );
};

export default Home;
