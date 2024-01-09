import NavHeader from '../../components/Header/Navbar/Navbar';

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
      <NavHeader naveHomeItem={naveHomeItem} navItems={navItems}></NavHeader>
    </div>
  );
}

export default HtmlCss;
