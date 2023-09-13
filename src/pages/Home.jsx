import EmailForm from "../components/EmailForm";
import ProjectList from "../components/ProjectList";
import projectsController from "../data/projectsController";
import Headline from "../components/Headline";
import AboutMe from "../components/AboutMe";


export const loader = ()=> {
    const projects = projectsController.getProjects();
    return {projects};
}

const Home = () => 
    <div>
        <Headline name="Mauro Benitez" headline="Fullstack developer"/>
        <AboutMe/>
        <ProjectList/>
        <EmailForm/>
    </div>


export default Home;