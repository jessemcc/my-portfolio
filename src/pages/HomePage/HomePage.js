import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";
import HomeAbout from "../../components/HomeAbout/HomeAbout";

const HomePage = () => {
  return (
    <section className="home">
      <article className="home__container">
        <Hero />
        <HomeAbout />
      </article>
    </section>
  );
};

export default HomePage;
