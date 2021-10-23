import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchProduct} from "../../store/actions/productsActions";
import {Box, Paper, Typography} from "@material-ui/core";

const Product = ({match}) => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.product);

  useEffect(() => {
    dispatch(fetchProduct(match.params.id))
  }, [dispatch, match.params.id]);

  return product && (
    <Paper component={Box} p={2}>
      <Typography variant="h4">{product.title}</Typography>
      <Typography variant="subtitle2">{product.price} KGS</Typography>
      <Typography variant="body1">{product.description}</Typography>
    </Paper>
  );
};

export default Product;