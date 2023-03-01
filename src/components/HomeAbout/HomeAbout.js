import "./HomeAbout.scss";
import Portrait from "../../assets/images/portrait.png";
import { Link } from "react-router-dom";
import Resume from "../../assets/files/jesse-mcconnell-resume.pdf";

const HomeAbout = () => {
  return (
    <section className="h-about">
      <article className="h-about__container">
        <div className="h-about__image-container">
          <h1 className="h-about__title">ABOUT ME</h1>
          <img
            src={Portrait}
            alt="Head shot of Jesse McConnell"
            className="h-about__image"
          />
        </div>
        <article className="h-about__about-section-container">
          <div className="h-about__about-me-container">
            <p className="h-about__about-me">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              soluta iste, atque, fugiat cum quibusdam accusantium aut
              consectetur id accusamus consequuntur reprehenderit ratione quam
              velit! Quaerat labore fugit eveniet et. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Nam quod beatae quo unde
              aliquam reiciendis corrupti vero recusandae, dolorem a dolor
              accusantium libero deleniti, deserunt iusto quasi autem eum
              fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Expedita illum maxime harum maiores eos dicta rerum fugiat quas.
              Laboriosam quae at voluptate tenetur quasi enim reiciendis modi
              ducimus doloremque dolorem.
            </p>
          </div>
          <div className="h-about__buttons-container">
            <Link to="/about" className="link">
              Learn More
            </Link>
            <a href={Resume} download className="link">
              Resume
            </a>
          </div>
        </article>
      </article>
    </section>
  );
};

export default HomeAbout;
