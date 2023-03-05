import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";
import HomeAbout from "../../components/HomeAbout/HomeAbout";
import HomeTechnologies from "../../components/HomeTechnologies/HomeTechnologies";
import HomeProjects from "../../components/HomeProjects/HomeProjects";
import HomeContact from "../../components/HomeContact/HomeContact";

const HomePage = () => {
  return (
    <section className="home" id="home">
      <article className="home__container">
        <Hero />
        <HomeAbout />
        <HomeTechnologies />
        <HomeProjects />
        <HomeContact />
      </article>
    </section>
  );
};

export default HomePage;
