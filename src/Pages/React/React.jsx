import NavHeader from '../../components/Header/Navbar/Navbar';

const React = () => {
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

export default React;
