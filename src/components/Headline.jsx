import React from 'react';
import { Typography, Box } from '@material-ui/core';

const Headline = ({ name, headline }) => {

    return (
        <Box textAlign="center" py={5}>
            <Typography variant="h2" color="textPrimary" gutterBottom>
                {name}
            </Typography>
            <Typography variant="h4" color="textSecondary">
                {headline}
            </Typography>
        </Box>
    );
};

export default Headline;
