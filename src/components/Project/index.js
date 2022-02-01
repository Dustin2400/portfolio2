import React from 'react';

function Project({ project }) {
    console.log(project)
    return (
        <a href={project.link} className={project.title}>{project.text}</a>
    )
}

export default Project