import React from "react";
import Typography from "@material-ui/core/Typography";
import ProductForm from "../../components/ProductForm/ProductForm";
import {createProduct} from "../../store/actions/productsActions";
import {useDispatch} from "react-redux";

const NewProduct = ({history}) => {
  const dispatch = useDispatch();

  const onSubmit = async productData => {
    await dispatch(createProduct(productData));
    history.replace('/');
  };

  return (
    <>
      <Typography variant="h4">New product</Typography>
      <ProductForm
        onSubmit={onSubmit}
      />
    </>
  );
};

export default NewProduct;