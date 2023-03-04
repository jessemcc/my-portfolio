import "./HomeProjects.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeProjects = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    try {
      const getFeaturedProjects = async () => {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/project`
        );
        setFeaturedProjects(data);
      };
      getFeaturedProjects();
    } catch (error) {
      console.error(`Failed to retrieve projects: ${error}`);
    }
  }, []);

  if (!featuredProjects) {
    return;
  }

  const featuredList = featuredProjects.slice(0, 3).map((project) => {
    return (
      <Link
        to={`/projects/${project.id}`}
        key={project.id}
        className="home-projects__card"
      >
        <h2 className="home-projects__card-title">{project.title}</h2>
        <img
          src={process.env.REACT_APP_API_URL + project.image}
          alt="snapshot of website"
          className="home-projects__card-image"
        />
        <h3 className="home-projects__card-techs">
          {project.techs.join(", ")}
        </h3>
      </Link>
    );
  });

  return (
    <section className="home-projects">
      <article className="home-projects__container">
        <h1 className="home-projects__title">PROJECTS</h1>
        {featuredList}
        <div className="home-projects__link-container">
          <Link to="/projects" className="home-projects__link link">
            All Projects
          </Link>
        </div>
      </article>
    </section>
  );
};

export default HomeProjects;
