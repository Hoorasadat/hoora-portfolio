import Navbar from '../../components/Header/Navbar/Navbar.jsx';
import Hero from './Hero/Hero.jsx';
import About from './About/About.jsx';
import Projects from './Projects/Projects.jsx';

function Main() {
  const naveHomeItem =
  {
    id: 1,
    to: "home",
    title: "HOME"
  };

  const navItems = [
    {
      id: 2,
      to: "about",
      title: "ABOUT"
    },
    {
      id: 3,
      to: "projects",
      title: "PORTFOLIO"
    },
    {
      id: 4,
      to: "contact",
      title: "CONTACT"
    },
  ]
  return (
    <div>
      <Navbar
        naveHomeItem={naveHomeItem}
        navItems={navItems}
        type="scroll"
      >
      </Navbar>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
    </div>
  );
}

export default Main;
