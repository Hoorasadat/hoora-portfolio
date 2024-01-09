import Navbar from '../../components/Header/Navbar/Navbar';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';

function Main() {
  const naveHomeItem =
  {
    id: 1,
    to: "home"
  };

  const navItems = [
    {
      id: 2,
      to: "about",
      title: "ABOUT"
    },
    {
      id: 3,
      to: "resume",
      title: "RESUME"
    },
    {
      id: 4,
      to: "projects",
      title: "PORTFOLIO"
    },
    {
      id: 5,
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
