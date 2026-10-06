import { Outlet } from 'react-router-dom';
import Header from '../components/ui/Header';
import SidBar from '../components/ui/SidBar';
import Home from './Home.jsx';
import './Layout.css';

function Layout() {
    return (
        <div className='layout'>
            <Header></Header>
            <div className='body'>
                <SidBar></SidBar>
                <div className="content">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}
export default Layout;