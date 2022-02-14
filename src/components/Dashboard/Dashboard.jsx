import './dashboard.css';
import { Link } from "react-router-dom";
import { FaUserAlt } from 'react-icons/fa';
import {AiOutlineLogout} from 'react-icons/ai'

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem("user")) || null;
 const handleLogout = () =>{
    localStorage.setItem('user', null);
    window.location.replace("/");
 }
  return (

    <aside class="col-12 col-md-2 p-0 bgPurple flex-shrink-1">
    <nav class="navbar navbar-expand navbar-dark bgPurple flex-md-column flex-row align-items-start py-2">
        <div class="collapse navbar-collapse ">
            <ul class="flex-md-column flex-row navbar-nav w-100 justify-content-between">
            <li class="nav-item">
                    <Link class="nav-link pl-0 text-nowrap usernameDisplay" to="/dashboard"><FaUserAlt/> <h5 class="font-weight-bold px-2">{user.uname}</h5></Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link pl-0 text-nowrap" to="/dashboard"><i class="fa fa-bullseye fa-fw"></i> <span class="font-weight-bold">Dashboard</span></Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link pl-0" to="/history"><i class="fa fa-book fa-fw"></i> <span class="d-none d-md-inline">History</span></Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link pl-0" to="" onClick={handleLogout}><AiOutlineLogout size={15}/><span class="d-none d-md-inline">Logout</span></Link>
                </li>

            </ul>
        </div>
    </nav>
</aside>
  )
}

export default Dashboard