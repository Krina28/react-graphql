import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import gql from "graphql-tag";
import { useQuery } from '@apollo/react-hooks';

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
            {data && data.getProductById ? (
                <Card >
                    <CardMedia style={{ height: 0, paddingTop: '56.25%' }}
                        image=""
                        title={data.getProductById.fname}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
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
            ) : 'No data'}
        </div>
    )
}

export default Product;