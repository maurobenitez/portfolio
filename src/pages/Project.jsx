import { useLoaderData } from "react-router-dom";
import projectsController from "../data/projectsController"
import { Container, Typography, Paper, Grid, Card, CardContent, CardMedia, Chip, Link } from '@mui/material';

export const loader = ({ params }) => {
    const project = projectsController.getProjectDetail(params.projectId);
    if (!project) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }
    return { project };
}

const Project = () => {
    const { project } = useLoaderData();
    return (
        <Container>
            <Paper sx={{ p: 2, mt: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={`/public/images/${project.image}`}
                                alt={project.name}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4" gutterBottom>{project.name}</Typography>
                        <Typography variant="body1" paragraph>{project.description}</Typography>
                        <Typography variant="h6" gutterBottom>Technologies Used:</Typography>
                        <div>
                            {project.technologies.map((tech, index) => (
                                <Chip key={index} label={tech} variant="outlined" sx={{ mr: 1, mb: 1 }} />
                            ))}
                        </div>
                        <Typography variant="body1" paragraph>
                            <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                Link
                            </Link>
                        </Typography>
                        <Typography variant="body1">
                            <Link href={project.repository} target="_blank" rel="noopener noreferrer">
                                Repositorio
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default Project;