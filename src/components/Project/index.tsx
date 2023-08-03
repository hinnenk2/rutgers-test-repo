import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import IProject from '../../interfaces/IProject';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 400,

        },
        media: {
            height: 400,
        }
    })
);

interface IProps {
    key: number,
    proj: IProject,
}

// Project cards to render a single project
const Project: React.FC<IProps> = (props: IProps) => {

    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={process.env.PUBLIC_URL + props.proj.image}
                        title={props.proj.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.proj.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" paragraph>
                            {props.proj.description}
                        </Typography>
                        <Typography variant="h6" component="h3" color="textSecondary">Tools Used</Typography>
                        <Typography variant="body2" color="textSecondary" component="p" paragraph>
                            {props.proj.tools.join(" | ")}
                        </Typography>
                        {props.proj.group &&
                            <div>
                                <Typography variant="h6" component="h3" color="textSecondary">Group Role</Typography>
                                <Typography variant="body2" color="textSecondary" component="p" paragraph>
                                    {props.proj.group}
                                </Typography>
                            </div>}
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href={props.proj.site} target="_blank">
                        Site
        </Button>
                    <Button size="small" color="primary" href={props.proj.code} target="_blank">
                        Code
        </Button>
                </CardActions>
            </Card>
        </Grid>

    )
}

export default Project;