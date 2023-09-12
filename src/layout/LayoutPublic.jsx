import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../components/ResponsiveAppBar.jsx";
import Container from '@mui/material/Container';
import { Box } from "@mui/material";
import Footer from "../components/Footer.jsx";
const LayoutPublic = () => {
    return (
        <Box sx={{ width: 1 }}>
            <ResponsiveAppBar />
            <Container maxWidth="xl">
                    <Outlet />
            </Container>
            <Footer/>
        </Box>
    )
}

export default LayoutPublic;