import React from "react";
import Reveal from './Reveal';
import '../assets/styles/Project.scss';

interface ProjectItem {
    image: string;
    title: string;
    href: string;
    description: string;
}

// TODO: Abyan - add entries here. The grid, hover states and stagger all come
// from this one array, so a new project is one object and nothing else. Example:
//
//   import mock01 from '../assets/images/mock01.png';
//   { image: mock01, title: "Project name", href: "https://...",
//     description: "One or two sentences on what it is and what you built." }
const projects: ProjectItem[] = [];

function Project() {
    return (
    <div className="projects-container" id="projects">
        <Reveal><h1>Projects</h1></Reveal>
        {projects.length === 0 ? (
            <Reveal delay={90}>
                <p className="projects-empty">In progress &mdash; coming soon.</p>
            </Reveal>
        ) : (
            <div className="projects-grid">
                {projects.map((project, index) => (
                    // Offset by column so the two cards in a row arrive in
                    // sequence rather than together.
                    <Reveal
                        key={project.title}
                        className="project"
                        delay={(index % 2) * 110}
                        distance={30}
                    >
                        <a href={project.href} target="_blank" rel="noreferrer">
                            <img src={project.image} className="zoom" alt="thumbnail" width="100%"/>
                        </a>
                        <a href={project.href} target="_blank" rel="noreferrer">
                            <h2>{project.title}</h2>
                        </a>
                        <p>{project.description}</p>
                    </Reveal>
                ))}
            </div>
        )}
    </div>
    );
}

export default Project;
