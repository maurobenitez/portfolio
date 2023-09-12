import ProjectCard from "./projectCard/ProjectCard";
import { useLoaderData } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";

const ProjectList = () => {
    const { projects } = useLoaderData();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h3" component="h3">
                Mis proyectos
            </Typography>

            <Grid container spacing={3}>
                {
                    projects.map((project, index) =>
                        <Grid item xs={12} sm={6} md={4} key={index}>                            <ProjectCard
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            date={project.date}
                            image={project.image}
                            description={project.description}
                        />
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    )
}

export default ProjectList;