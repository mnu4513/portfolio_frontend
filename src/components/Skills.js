
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsList = [
    'React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML', 'CSS', 'Responsive Web Page', 'Git', 'Github' , 'RESTful API', 'Postman API', 'Redux', 'Data Structure and Algorithm', 'Redis', 'Caching', 'MySQL', 'Linux Administrator', 'Unix Administrator', 'Shell/Bash Scripting', 'AWS S3'
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;