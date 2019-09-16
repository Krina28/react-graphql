import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import gql from "graphql-tag";
import { useQuery } from '@apollo/react-hooks';
import Error from '../common/error';

const Product = (props) => {
    const { location } = props;
    let path = location.pathname.split('/');
    let productId = path[path.length - 1]

    const GET_PRODUCT = gql`
    query getProductById($_id: String!) {
        getProductById(_id: $_id) {
            _id
            fname
            category
            warehouse
        }
      }
    `;

    const { loading, error, data } = useQuery(GET_PRODUCT, { variables: { _id: productId } });

    return (
        <div>
            {error && <Error />}
            {data && data.getProductById && (
                <Card >
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {data.getProductById.fname}
                        </Typography>
                        <Typography component="p">
                            {data.getProductById.category}
                        </Typography>
                        <Typography component="p">
                            {data.getProductById.warehouse}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" target="_blank">
                            Add To Cart
                    </Button>
                    </CardActions>
                </Card>
            )}
        </div>
    )
}

export default Product;