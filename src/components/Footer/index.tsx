import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            marginBottom: 0
        },
        title: {
            flexGrow: 1,
            textAlign: "center"
        },
        appBar: {
            top: 'auto',
            bottom: 0,
        },
        offset: theme.mixins.toolbar,
    })
);

export default function Footer() {

    const classes = useStyles();


    return (
        <footer className={classes.root}>
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar>
                    <Typography component="p" className={classes.title}>
                        Tiffany L. Brand <i className="far fa-copyright"></i>
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </footer>

    )

}
