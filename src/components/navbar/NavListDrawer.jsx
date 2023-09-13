import { ListItem, ListItemText } from "@material-ui/core";
import { Box, List, ListItemButton, ListItemIcon } from "@mui/material"
import { Link } from 'react-router-dom';

const NavListDrawer = ({ navLinks }) => {
    return (
        <Box sx={{ width: 250 }} >
            <nav>
                <List>
                    {
                        navLinks.map(link => (
                            <ListItem
                                disablePadding
                                key={link.title}
                            >
                                <ListItemButton
                                    component={Link}
                                    to={link.path}
                                >
                                    <ListItemIcon>{link.icon}</ListItemIcon>
                                    <ListItemText>{link.title}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </nav>
        </Box>
    )
}

export default NavListDrawer;