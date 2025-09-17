import Navbar from '../../components/Header/Navbar/Navbar.jsx';

const HtmlCss = () => {
  const naveHomeItem =
  {
    id: 1,
    to: "/"
  };

  const navItems = [
    {
      id: 2,
      to: "/csharp-dotnet",
      title: "C#-.Net"
    },
    {
      id: 3,
      to: "/react-node",
      title: "REACT-NODE"
    }
  ]
  return (
    <div>
      <Navbar
        naveHomeItem={naveHomeItem}
        navItems={navItems}
        type="route"
      >
      </Navbar>
    </div>
  );
}

export default HtmlCss;
