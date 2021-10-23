import axios from "axios";

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';

export const CREATE_PRODUCT_REQUEST = 'CREATE_PRODUCT_REQUEST';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE';

export const fetchProductsRequest = () => ({type: FETCH_PRODUCTS_REQUEST});
export const fetchProductsSuccess = products => ({type: FETCH_PRODUCTS_SUCCESS, payload: products});
export const fetchProductsFailure = () => ({type: FETCH_PRODUCTS_FAILURE});

export const fetchProductRequest = () => ({type: FETCH_PRODUCT_REQUEST});
export const fetchProductSuccess = product => ({type: FETCH_PRODUCT_SUCCESS, payload: product});
export const fetchProductFailure = () => ({type: FETCH_PRODUCT_FAILURE});

export const createProductRequest = () => ({type: CREATE_PRODUCT_REQUEST});
export const createProductSuccess = () => ({type: CREATE_PRODUCT_SUCCESS});
export const createProductFailure = () => ({type: CREATE_PRODUCT_FAILURE});

export const fetchProducts = () => {
  return async dispatch => {
    try {
      dispatch(fetchProductsRequest());
      const response = await axios.get('http://localhost:8000/products');
      dispatch(fetchProductsSuccess(response.data));
    } catch (e) {
      dispatch(fetchProductsFailure());
    }
  };
};

export const fetchProduct = id => {
  return async dispatch => {
    try {
      dispatch(fetchProductRequest());
      const response = await axios.get('http://localhost:8000/products/' + id);
      dispatch(fetchProductSuccess(response.data));
    } catch (e) {
      dispatch(fetchProductFailure());
    }
  };
};

export const createProduct = productData => {
  return async dispatch => {
    try {
      dispatch(createProductRequest());

      await axios.post('http://localhost:8000/products', productData);

      dispatch(createProductSuccess());
    } catch (e) {
      dispatch(createProductFailure());
      throw e;
    }
  };
};
