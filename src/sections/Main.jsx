import { Link as RouterLink, Outlet } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function Main() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default Main;
