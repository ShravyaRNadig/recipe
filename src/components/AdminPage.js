import {useState} from 'react';

const AdminPage = () => {

    const [sidebarOpen,setSidebarOpen] = useState(false);

    const openSidebar=()=>{
        setSidebarOpen(true);
    }

    const closeSidebar=()=>{
        setSidebarOpen(false);
    }

  return (
    <div className='container'>
        <h1>AdminPage</h1>
    </div>
  )
}

export default AdminPage
