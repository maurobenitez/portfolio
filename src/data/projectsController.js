import projects from "./projects"

const getProjects = () => {
    return projects;
}

const getProjectDetail = (id) => {
    const project = projects.find((project) => project.id == id);
    return project;
}

const projectsController = { getProjects, getProjectDetail};

export default projectsController;
