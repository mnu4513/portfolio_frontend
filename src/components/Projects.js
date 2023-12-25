import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import Loading from './Loading';

const Projects = () => {
    const [projectList, setProjectList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProjects();
    }, []);

    async function fetchProjects() {
        try {
            const response = await fetch('http://localhost:3001/projects');
            const data = await response.json();
            setProjectList(data?.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        };
    };


    return (
        <div id='projects'>
            {
                (loading) ? <Loading/> :
                projectList.map((item) => {
                    return <ProjectCard projectData={item} key={item._id} />
                })
            }
        </div>
    );
};

export default Projects;