import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { HOME_PATH, SKILLS_PATH, PORTFOLIO_PATH } from '../../pathnames';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            marginBottom: 0
        },
        title: {
            flexGrow: 1,
            display: "none",
            [theme.breakpoints.up("sm")]: {
                display: "block"
            }
        },
        titleAnchor: {
            textDecoration: "none",
            color: "#fff"
        }
    })
);

// Header with Navigation
export default function Header() {

    const classes = useStyles();
    const location = useLocation();

    return (
        <header className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <a href={HOME_PATH} className={classes.titleAnchor} >Tiffany L. Brand</a>
                    </Typography>
                    <Button color={location.pathname === HOME_PATH ? "secondary" : "inherit"} component={RouterLink} to={HOME_PATH}>About</Button>
                    <Button color={location.pathname === SKILLS_PATH ? "secondary" : "inherit"} component={RouterLink} to={SKILLS_PATH}>Skills</Button>
                    <Button color={location.pathname === PORTFOLIO_PATH ? "secondary" : "inherit"} component={RouterLink} to={PORTFOLIO_PATH}>Portfolio</Button>
                </Toolbar>
            </AppBar>
        </header>

    )

}
