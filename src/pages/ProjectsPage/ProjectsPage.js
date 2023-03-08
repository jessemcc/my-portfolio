import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProjectsPage.scss";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    try {
      const getProjects = async () => {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/project`
        );
        setProjects(data);
      };
      getProjects();
    } catch (error) {
      console.error(`Unable to retrieve projects: ${error}`);
    }
  }, []);

  if (!projects) {
    return;
  }

  const projectList = projects.map((project) => {
    document.title = `Jesse McConnell - Projects`;
    return (
      <section key={project.id} className="projects__card">
        <h1 className="projects__card-title">{project.title}</h1>
        <div className="projects__image-container">
          <img
            src={process.env.REACT_APP_API_URL + project.image}
            alt="Snapshots of project"
            className="projects__card-image"
          />
        </div>
        <article className="projects__info-container">
          <div className="projects__description-container">
            <h2 className="projects__description-title">Description</h2>
            <p className="projects__description--height">
              {project.description}
            </p>
          </div>
          <div className="projects__description-container">
            <h2 className="projects__description-title">Techs used</h2>
            <p className="projects__description">{project.techs.join(", ")}</p>
          </div>
          <article className="projects__links-container">
            <div className="projects__description-container">
              <h2 className="projects__description-title">
                <Link
                  to={project.repo}
                  target="_blank"
                  className="projects__description"
                >
                  View GitHub
                </Link>
              </h2>
            </div>
            {project.link !== "" ? (
              <div className="projects__description-container">
                <h2 className="projects__description-title">
                  <Link
                    to={project.link}
                    target="_blank"
                    className="projects__description"
                  >
                    View Website
                  </Link>
                </h2>
              </div>
            ) : null}
          </article>
          <div className="projects__link-container">
            <Link to={`/projects/${project.id}`} className="link">
              Demo
            </Link>
          </div>
        </article>
      </section>
    );
  });

  return (
    <section className="projects">
      <article className="projects__container">
        {projectList}
        <div className="projects__link-button">
          <Link to="/#contact" className="link">
            Hire Me
          </Link>
        </div>
      </article>
    </section>
  );
};

export default ProjectsPage;
