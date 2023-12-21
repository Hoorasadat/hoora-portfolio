// import { Link as RouterLink, Outlet } from 'react-router-dom';
import NavHeader from './Navbar/Navbar';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

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
