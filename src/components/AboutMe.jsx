import React from 'react';
import { Typography, Paper, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        margin: 'auto',
        maxWidth: 600,
    },
    image: {
        width: 128,
        height: 128,
        borderRadius: '50%',
    },
}));

const AboutMe = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <img
                        className={classes.image}
                        alt="Profile"
                        src="https://placekitten.com/128/128"
                    />
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography variant="h5">Mauro Benitez</Typography>
                            <Typography variant="body2" color="textSecondary">
                                Fullstack Developer
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Typography variant="body1" style={{ marginTop: '20px' }}>
                Write a brief description about yourself and your skills here. Mention
                any relevant technologies or projects you've worked on during your
                journey to becoming a junior fullstack developer.
            </Typography>
        </Paper>
    );
};

export default AboutMe;
