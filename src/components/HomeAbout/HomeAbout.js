import "./HomeAbout.scss";
import Portrait from "../../assets/images/portrait.png";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import Resume from "../../assets/files/jesse-mcconnell-resume.pdf";
import { useEffect, useMemo } from "react";

const HomeAbout = () => {
  const options = useMemo(
    () => ({
      strings: [
        "Hello there! My name is Jesse McConnell, and I am a software engineer with a diploma from Brainstation. I have a passion for designing and developing websites and applications that are both functional and aesthetically pleasing. With four years of prior experience in web design, I am a self-taught coder who has honed my skills through online courses from freecodecamp and codecademy.\n\nI am a firm believer in the power of continuous learning and growth, which is why I spend my free time practicing with leetcode and building websites. I am constantly striving to improve my skills and stay up-to-date with the latest trends and technologies in the field of software engineering.\n\nBeyond my professional life, I have a variety of hobbies and interests that keep me engaged and energized. I am an avid movie and TV show buff and love to spend my downtime catching up on the latest releases. I am also a big fan of board games like Catan, chess, Go, and Risk, and enjoy playing video games like XCOM, Elden Ring, and NHL.\n\nBefore becoming a software engineer, I worked in customer service, first as a security guard for the US Embassy, and later as a supervisor for Subway. These experiences taught me the importance of communication, problem-solving, and attention to detail, all of which have proven to be invaluable skills in my current role.\n\nI am passionate about creating intuitive, user-friendly, and efficient web applications that meet the needs of my clients and users. I am constantly seeking new challenges and opportunities to learn and grow in my field, and am excited about what the future holds for me as a software engineer.",
      ],
      typeSpeed: 10,
      backSpeed: 50,
      showCursor: false,
    }),
    []
  );

  useEffect(() => {
    const typed = new Typed(".about-typing", options);

    return () => {
      typed.destroy();
    };
  }, [options]);

  return (
    <section className="home-about">
      <h1 className="home-about__title">ABOUT ME</h1>
      <article className="home-about__container">
        <div className="home-about__image-container">
          <img
            src={Portrait}
            alt="Head shot of Jesse McConnell"
            className="home-about__image"
          />
        </div>
        <article className="home-about__about-section-container">
          <div className="home-about__about-me-container">
            <pre
              className="about-typing home-about__about-me"
              style={{ whiteSpace: "pre-wrap", lineHeight: "1.5" }}
            />
          </div>
          <div className="home-about__buttons-container">
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
