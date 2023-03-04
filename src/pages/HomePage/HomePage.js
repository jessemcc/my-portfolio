import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";
import HomeAbout from "../../components/HomeAbout/HomeAbout";
import HomeTechnologies from "../../components/HomeTechnologies/HomeTechnologies";
import HomeProjects from "../../components/HomeProjects/HomeProjects";

const HomePage = () => {
  return (
    <section className="home">
      <article className="home__container">
        <Hero />
        <HomeAbout />
        <HomeTechnologies />
        <HomeProjects />
      </article>
    </section>
  );
};

export default HomePage;
