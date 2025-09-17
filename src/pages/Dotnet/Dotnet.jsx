import NavHeader from '../../components/Header/Navbar/Navbar';

const Dotnet = () => {
  const naveHomeItem =
  {
    id: 1,
    to: "/"
  };

  const navItems = [
    {
      id: 3,
      to: "/react-node",
      title: "REACT-NODE"
    },
    {
      id: 4,
      to: "/html-css-js",
      title: "HTML-CSS-JS"
    }
  ]
  return (
    <div>
      <NavHeader naveHomeItem={naveHomeItem} navItems={navItems}></NavHeader>
    </div>
  );
}

export default Dotnet;
