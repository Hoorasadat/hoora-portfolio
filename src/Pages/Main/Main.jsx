// import { Link as RouterLink, Outlet } from 'react-router-dom';
import NavHeader from './sections/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function Main() {
  return (
    <div>
      <NavHeader></NavHeader>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default Main;
