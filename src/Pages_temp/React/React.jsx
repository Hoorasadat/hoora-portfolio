import NavHeader from '../../components/Header/Navbar/Navbar';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import classNames from 'classnames';
import styles from './React.module.scss';
import HooraPortfolio from "./media/HooraPortfolio.jpg";
import ComConnImage from "./media/communityConnect.jpg";
import ComConnVideo from "./media/Recording.mov";
import MyFriendsImage from "./media/my-friends.jpg";
import FaceDetectionImage from "./media/face detection.jpg";
import CalgaryTimesImage from "./media/calgary-times.jpg";


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
  ];
  
  return (
    <>
      <NavHeader naveHomeItem={naveHomeItem} navItems={navItems}>
      </NavHeader>
      <section className = {classNames(styles.projects, "d-flex flex-column align-items-center")}>
        <h1 className="sectionTitle">React & React-Node Projects</h1>

        <ProjectCard
          name = "Hoora's Portfolio"
          description = "This project was built on top of React with usage of Bootstrap and Saas for the FE and it is a new version of my portfolio."
          git="https://github.com/Hoorasadat/hoora-portfolio"
          web="https://hoora.dev/"
          thumbnailUrl = {HooraPortfolio}
        ></ProjectCard>

        <ProjectCard
          name = "Community Connect"
          description = "This project was built on top of a PERN stack with usage of typescript for the FE and it is a platform for immigrant techies to connect and help each others."
          thumbnailUrl = {ComConnImage}
          videoUrl = {ComConnVideo}
        >
        </ProjectCard>

        <ProjectCard
          name = "My friends"
          description = "This project was built on top of React and it shows the list of a few friends of mine that you can reach out to them to ask about me."
          git="https://github.com/Hoorasadat/myfriends"
          web="https://hoorasadat.github.io/myfriends/"
          thumbnailUrl = {MyFriendsImage}
        >
        </ProjectCard>

        <ProjectCard
          name = "Face Detection"
          description = "This proect was built on top of React and by passing an image url, it will show the image and detect the face(s) on it."
          git="https://github.com/Hoorasadat/Face-Detection"
          web="https://hoorasadat.github.io/Face-Detection/"
          thumbnailUrl = {FaceDetectionImage}
        >
        </ProjectCard>

        <ProjectCard
          name = "Calgary Times"
          description = "Calgary Times is a website that lists blog posts. Data are locally stored and will be loaded directly into client without a server."
          git="https://github.com/Hoorasadat/Calgary-Times"
          web="https://hoorasadat.github.io/Calgary-Times/"
          thumbnailUrl = {CalgaryTimesImage}
        >
        </ProjectCard>

      </section>
    </>
  );
}

export default React;
