import "./AboutPage.scss";
import portrait from "../../assets/images/portrait.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleContactClick = (e, sectionId) => {
    e.preventDefault();
    if (pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="about" id="about">
      <article className="about__container">
        <div className="about__image-container">
          <img
            src={portrait}
            alt="Head shot of Jesse McConnell"
            className="about__image"
          />
        </div>
        <article className="about__info-container">
          <div className="about__about-container">
            <h2 className="about__title">About Me</h2>
            <p className="about__info">
              Hello World! My name is Jesse McConnell, and I'm a software
              engineer who's passionate about designing and developing
              beautiful, functional websites and applications. I have a diploma
              from Brainstation and four years of previous experience in web
              design. While I'm largely self-taught, I've also taken online
              courses from freecodecamp and codecademy to further develop my
              skills.
              <br />
              <br />
              As someone who believes in the power of continuous learning, I
              spend my free time practicing with leetcode and building websites.
              I'm always eager to learn about the latest trends and technologies
              in the field of software engineering so I can stay up-to-date and
              grow as a professional.
              <br />
              <br />
              When I'm not coding, I have a few hobbies that keep me busy. I'm a
              big movie and TV show buff, and I love catching up on the latest
              releases. I'm also into board games like Catan, chess, Go, and
              Risk, and I enjoy playing video games like XCOM, Elden Ring, and
              NHL.
              <br />
              <br />
              Before becoming a software engineer, I worked in customer service
              as a security guard for the US Embassy and later as a supervisor
              for Subway. These experiences taught me valuable skills like
              communication, problem-solving, and attention to detail, which
              have been crucial in my current role.
              <br />
              <br />
              What I'm most passionate about is creating web applications that
              are intuitive, user-friendly, and efficient. I'm always looking
              for new challenges and opportunities to learn and grow, and I'm
              excited to see where my career as a software engineer takes me.
            </p>
          </div>
          <div className="about__about-container">
            <h2 className="about__title">Current Location</h2>
            <p className="about__info">Ottawa, Ontario, Canada</p>
          </div>
          <div className="about__about-container">
            <h2 className="about__title">Willing to Relocate</h2>
            <p className="about__info">Yes</p>
          </div>
          <div className="about__about-container">
            <h2 className="about__title">Tech Skills</h2>
            <p className="about__info">
              HTML, CSS, Sass, Bootstrap, JavaScript, React, Node, nodemailer,
              MySQL, API, Web APIs, Axios, Heroku, Netlify, Express, OAuth,
              Knex, Jwt, GitHub.
            </p>
          </div>
          <div className="about__about-container">
            <h2 className="about__title">Experience</h2>
            <p className="about__info">
              1. Trivia Trials: A Fun and Engaging Multiple-Choice Trivia Game
              During a hackathon, my team of fellow software engineers, Justin
              and Hilary, developed an exciting trivia game called Trivia
              Trials. This app offers users over 100 multiple-choice questions
              on various topics, including history, science, pop culture, and
              more. With Trivia Trials, users can test their knowledge, compete
              with friends, and have fun while learning new facts.
              <br />
              <br />
              2. ActiNext: An App to Help You Decide What to Do Next In a pair
              programming hackathon, I teamed up with Dixon to develop ActiNext,
              an app that helps people decide what to do next when they're
              feeling bored. ActiNext offers over 50 suggestions for activities,
              ranging from simple things like reading a book or taking a bath to
              more adventurous options like going for a hike or a road trip with
              friends. With ActiNext, users can shake off their boredom and find
              exciting new things to do.
              <br />
              <br />
              3. Personalizing the Aeroplan Experience: An Air Canada Industry
              Project I had the pleasure of working on an industry project for
              Air Canada, where my team of fellow software engineers, Kimmy,
              Dylan, and Sang, collaborated with a data scientist, Dylan, and a
              UX designer named Arika to personalize the Aeroplan experience.
              Our mission was to increase engagement among members by improving
              the digital product experience for both frequent flyers and
              everyday earners. We streamlined the process and cleaned up the
              webpage, making everything easily accessible and more apparent to
              newcomers. The result was a more engaging and personalized
              experience for all Aeroplan users.
            </p>
          </div>
          <div className="about__about-container">
            <h2 className="about__title">Interpersonal Skills</h2>
            <p className="about__info">
              I possess strong interpersonal skills that make me an asset in any
              work environment. I'm a leader who communicates effectively,
              delegates tasks, and encourages a positive work culture. Whether
              working solo or in a team, I'm hard-working and deliver
              high-quality work. My problem-solving skills are creative, and I
              think outside the box to find innovative solutions. Being
              bilingual allows me to communicate effectively with diverse
              clients and colleagues. My customer service experience has given
              me excellent communication skills and a commitment to exceeding
              expectations. Overall, my diverse interpersonal skills make me a
              valuable asset to any team.
            </p>
          </div>
          <div className="about__link-container">
            <Link
              className="link"
              to="/"
              onClick={(e) => handleContactClick(e, "contact")}
            >
              Hire Me
            </Link>
          </div>
        </article>
      </article>
    </section>
  );
};

export default AboutPage;
