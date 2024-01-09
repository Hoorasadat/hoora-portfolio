import { Outlet } from 'react-router-dom';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

function Layout () {
    return (
        <div>
            <Outlet />
            <Contact></Contact>
            <Footer></Footer>
        </div>
      );
    }

export default Layout;
