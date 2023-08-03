import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import headshot from '../../assets/images/tiffany-brand-sq.jpg';
import { Fade } from 'react-awesome-reveal';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: "rgb(220, 233, 240)",
            margin: theme.spacing(3),
            padding: theme.spacing(3)
        },
        container: {
            paddingBottom: theme.spacing(4),

        },
        img: {
            width: "100%",
        },
        paper: {
            padding: theme.spacing(1),
            color: theme.palette.text.secondary,
        },
        heading: {
            padding: theme.spacing(1),
            color: theme.palette.text.secondary,
        },
        textBlock: {
            margin: theme.spacing(1)
        },
        contact: {
            paddingLeft: theme.spacing(1),
            margin: 0
        },
        icons: {
            fontSize: "4rem",
        },
        iconGroup: {
            textAlign: "center"
        },
        email: {
            color: theme.palette.text.secondary,
        }


    })
);
// About component with contact links
export default function About() {

    const classes = useStyles();

    return (
        <section id="about" className={classes.root}>
            <Container className={classes.container}>
                <Typography component="h2" variant="h3" className={classes.heading}>About Me</Typography>
                <hr />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={5}>
                        <Fade>

                            <Paper className={classes.paper}>

                                <img src={headshot}
                                    className={classes.img} alt="Tiffany Brand headshot" />
                            </Paper>
                        </Fade>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Fade>
                                    <Typography variant="h5" component="h3" className={classes.heading}>
                                        Contact me:
                                </Typography>

                                    <Typography className={classes.contact} variant="body1" paragraph >
                                        <small>Phone: (603) 978-8581</small>
                                    </Typography>
                                    <Typography className={classes.contact} variant="body1" paragraph >
                                        <small>Email: <a className={classes.email} href="mailto:tiffanylbrand@outlook.com">TiffanyLBrand@outlook.com</a></small>
                                    </Typography>
                                </Fade>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} sm={7} >
                        <Fade>
                            <div className={classes.textBlock}>
                                <Typography variant="body1" paragraph >
                                    Full stack web developer with a background in technology coordination and management in the education sector,
                                    committed to
                                    team collaboration and continuous learning in responsive web design. Known as a creative
                                    problem solver, leader, and mentor. I am persistent in finding solutions and am seeking new challenges in
                                    front
                                    and back end development.
                        </Typography>
                                <Typography variant="body1" paragraph>
                                    Since completing a certificate in Full Stack Web Development at the University of New Hampshire,
                                    I am continuing to build my
                                    skills in HTML & CSS, JavaScript, TypeScript, Node.js, MySQL, MongoDB, React.js, RESTful APIs, and responsive web
                                    design. I
                                    thoroughly enjoy collaborating with my teams to bring our software visions to life.
                        </Typography>
                                <Typography variant="body1" paragraph>
                                    When I'm not coding, you'll find me hiking New Hampshire's beautiful trails, taking in
                                    some
                                    musical theater, or tap dancing!
                        </Typography>
                            </div>
                        </Fade>
                        <Grid container spacing={2} className={classes.iconGroup}>
                            <Grid item xs={4}>

                                <IconButton color="primary" href="https://github.com/tiffany-brand" title="GitHub" target="_blank" >
                                    <i className={`fab fa-github-square ${classes.icons}`}></i>
                                </IconButton>
                            </Grid>
                            <Grid item xs={4} >
                                <IconButton color="primary" href="https://www.linkedin.com/in/tiffanybrand/" title="LinkedIn" target="_blank">
                                    <i className={`fab fa-linkedin ${classes.icons}`}></i>
                                </IconButton>

                            </Grid>
                            <Grid item xs={4} >
                                <IconButton color="primary" href="/resume/Tiffany-Brand-Resume.pdf" title="Resume" target="_blank" download>
                                    <i className={`fas fa-sticky-note ${classes.icons}`}></i>
                                </IconButton>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


            </Container >
        </section >

    )

}
