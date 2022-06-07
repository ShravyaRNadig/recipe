import {useState} from 'react';
import './styleSheets/AdminPage.css';
import AdminNavbar from './pages/AdminNavbar';
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
        <AdminNavbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
        <h1>AdminPage</h1>
    </div>
  )
}

export default AdminPage;
