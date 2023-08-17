export default function products_reducer(state, action) {

  if (action.type === "GET_PRODUCTS_BEGIN") {
    return { ...state, products_loading: true };
  }
  if (action.type === "GET_PRODUCTS_SUCCESS") {
    const featured_products = action.payload.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      products: action.payload,
      featured_products: featured_products,
      products_loading: false,
    };
  }
  if (action.type === "GET_PRODUCTS_ERROR") {
    return {
      ...state,
      products_error: true,
      products_loading: false,
    };
  }

  if (action.type === "GET_SINGLE_PRODUCT_BEGIN") {
    return { ...state, single_product_loading: true };
  }
  if (action.type === "GET_SINGLE_PRODUCT_SUCCESS") {
    return {
      ...state,
      single_product: action.payload,

      single_product_loading: false,
    };
  }
  if (action.type === "GET_SINGLE_PRODUCT_ERROR") {
    return {
      ...state,
      single_product_error: true,
      single_product_loading: false,
    };
  }

  return state;
}
