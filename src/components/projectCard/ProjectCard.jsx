import { Link as RouterLink } from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const ProjectCard = ({ id, name, description, image }) =>

    <Card>
        <CardMedia
            component="img"
            height="140"
            image={`images/${image}`}
            alt={name}
        />
        <CardContent>
            <Typography variant="h5" component="div">
                {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
            <RouterLink to={`/projects/${id}`}>
                <Button variant="contained">
                    Ver proyecto
                </Button>
            </RouterLink>
        </CardContent>
    </Card>
{/* <Card>
        <CardMedia
            sx={{ height: 140 }}
            image={`images/${image}`}
            title={name}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Descripción del proyecto
            </Typography>
        </CardContent>
        <CardActions>

            <RouterLink to={`/projects/${id}`}>
                <Button size="small">
                    Ver proyecto
                </Button>
            </RouterLink>
        </CardActions> */}
{/*   <p>name: {name}</p>
        <p>date: {date}</p> */}
{/*         <img src={`images/${image}`} className={styles.image} alt="" />
 */} {/* <Link to={`/projects/${id}`}>ver elemento</Link> */ }
/*  <div id={`element-${id}`}>
 </div> */

export default ProjectCard;