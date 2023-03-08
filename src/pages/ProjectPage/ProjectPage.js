import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./ProjectPage.scss";

const ProjectPage = () => {
  const [currentProject, setCurrentProject] = useState([]);
  const { projectid } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    try {
      const getProject = async () => {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/project/${projectid}`
        );
        setCurrentProject(data);
      };
      getProject();
    } catch (error) {
      console.error(`Couldn't retrieve project video: ${error}`);
    }
  }, [projectid]);

  if (!currentProject) {
    return;
  }

  document.title = `Jesse McConnell - ${currentProject.title} Demo`;

  return (
    <section className="project">
      <article className="project__container">
        <video
          src={process.env.REACT_APP_API_URL + currentProject.video}
          controls
          type="video/mp4"
          className="project__video"
        ></video>
        <div className="project__links-container">
          <Link to="" onClick={goBack} className="link">
            Go Back
          </Link>
          <Link to="/#contact" className="link">
            Hire Me
          </Link>
        </div>
      </article>
    </section>
  );
};

export default ProjectPage;
