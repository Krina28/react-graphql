import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
});

export default function Error() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Something went wrong !!
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Something went wrong at the backend. Try again in a few minutes
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to="/"><Button size="small" color="primary">Go to Home</Button></Link>
            </CardActions>
        </Card>
    );
}
