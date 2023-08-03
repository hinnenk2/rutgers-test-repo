import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { projects } from '../../assets/projects';
import IProject from '../../interfaces/IProject';
import Project from '../Project';
import { Fade } from 'react-awesome-reveal';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: "rgb(220, 233, 240)",
            margin: theme.spacing(3),
            padding: theme.spacing(3)
        },
        heading: {
            padding: theme.spacing(1),
            color: theme.palette.text.secondary,
        },
        arrowContainer: {
            textAlign: "right",
        },
        arrow: {
            fontSize: "4rem",
            color: theme.palette.primary.main,
        },
    })
);

// Portfolio page with dynamically rendered projects
export default function Portfolio() {

    const classes = useStyles();

    return (
        <section className={classes.root} id="top">
            <Typography component="h2" variant="h3" className={classes.heading}>Portfolio</Typography>
            <hr />
            <Fade>
                <Grid container spacing={3}>

                    {projects.map((proj: IProject) => {
                        return <Project key={proj.id} proj={proj} />
                    })}

                </Grid>
            </Fade>
            <div className={classes.arrowContainer}>
                <IconButton color="primary" href="#top" title="Top"  >
                    <i className={`fas fa-angle-up ${classes.arrow}`}></i>
                </IconButton>
            </div>
        </section >
    )
}