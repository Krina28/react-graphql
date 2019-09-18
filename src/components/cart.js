import React from 'react';
import { withStyles } from '@material-ui/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        background: 'gray',
    },
    nested: {
        paddingLeft: '10px',
    },
});

function getItems() {
    var json = {
        "list": [{
            "id": 1,
            "title": "Google",
        },
        {
            "id": 2,
            "title": "Apple",
        },
        {
            "id": 3,
            "title": "Uber",
        }
        ]
    };
    return json;
}
class NestedList extends React.Component {
    state = {};
    handleClick = (e) => {
        this.setState({ [e]: !this.state[e] });
    };
    render() {
        const items = getItems();
        return (
            <div>
                <Chip icon={<ShoppingCart />} label="3 items in your cart" variant="outlined" />
                <Grid spacing={4}>
                    <Grid item xs={12} md={12}>
                        {items.list.map((list) => {
                            return (
                                <List key={list.id}>
                                    <ListItemText primary={list.title} secondary="Jan 7, 2014" />
                                    <ListItemSecondaryAction>
                                        2
                            </ListItemSecondaryAction>
                                    <Divider key={list.id} absolute />
                                </List>
                            )
                        })}
                    </Grid>
                </Grid>
                <Divider />
                <div>
                    <div style={{ float: 'left' }}>
                        <p>TOTAL:</p>
                        <p>Sub total:</p>
                        <p>Shipping:</p>
                        <p>Tax:</p>
                    </div>
                    <div style={{ float: 'left' }}>
                        <p>430</p>
                        <p>400</p>
                        <p>20</p>
                        <p>10</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(NestedList);
