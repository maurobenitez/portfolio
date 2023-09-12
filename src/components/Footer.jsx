import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', marginTop: '20px' }}>
            <Container maxWidth="md">
                <Typography variant="body2" color="textSecondary" align="center">
                    &copy; 2023 Your Company Name
                </Typography>
            </Container>
        </footer>
    )
}

export default Footer;