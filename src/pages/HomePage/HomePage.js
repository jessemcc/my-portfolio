import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";

const HomePage = () => {
  return (
    <section className="home">
      <article className="home__container">
        <Hero />
      </article>
    </section>
  );
};

export default HomePage;
