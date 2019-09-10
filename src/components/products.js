import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import gql from "graphql-tag";
import { useQuery } from '@apollo/react-hooks';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export default function TitlebarGridList() {
    const GET_PRODUCTS = gql`
    {
        getAllProducts {
          _id
          fname
          category
          image
        }
    }
`;
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    const classes = useStyles();

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">All Products</ListSubheader>
                </GridListTile>
                {data.getAllProducts.map(tile => (
                    <GridListTile key={tile._id}>
                        <img src={tile.image} alt={tile.fname} />
                        <GridListTileBar
                            title={tile.fname}
                            subtitle={<span>by: {tile.category}</span>}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}