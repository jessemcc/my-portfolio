import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";
import HomeAbout from "../../components/HomeAbout/HomeAbout";
import HomeTechnologies from "../../components/HomeTechnologies/HomeTechnologies";

const HomePage = () => {
  return (
    <section className="home">
      <article className="home__container">
        <Hero />
        <HomeAbout />
        <HomeTechnologies />
      </article>
    </section>
  );
};

export default HomePage;
