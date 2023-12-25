import React from "react";
import "../style.css"

const ProjectCard = (props) => {
  const {
    projectTitle,
    projectType,
    usedTechStacks,
    projectHighlights,
    projectDescription,
    projectImage,
    projectVideo,
  } = props.projectData;
  return (
    <div id="projectCard">
      <div className="info">
        <h3>{projectTitle}</h3>
        <h5>{projectType}</h5>
    
        <h6>Used Tech-stacks - {usedTechStacks?.join(", ")}</h6>

        <h6>{projectHighlights}</h6>
 
      </div>
      
        {projectImage ? <img src={projectImage} alt="projectImage" /> : null}

      <div className="vid">
        {projectVideo ? (
          <iframe
            src={projectVideo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : null}
      </div>
        <p>About Project - {projectDescription}</p>
    </div>
  );
};

export default ProjectCard;
