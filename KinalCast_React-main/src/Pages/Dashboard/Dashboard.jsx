import './Dashboard.css'
import {Navbar} from '../../components/Navbar.jsx'
import {Sidebar} from '../../components/Sidebar.jsx'
import {DashboardContent} from '../../components/DashboardContent.jsx'
export const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <Navbar/>
      <Sidebar/>
      <DashboardContent/>
    </div>
  )
}
