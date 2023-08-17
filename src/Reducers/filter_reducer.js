export default function filter_reducer(state, action) {
 if (action.type === "LOAD_PRODUCTS") {
  return {
   ...state,
   filteredProducts: [...action.payload],
   allProducts: [...action.payload],
  };
 }

 if (action.type === "UPDATE_SORT") {
  return {
   ...state,
   sort:  action.payload,
  };
 }

 if (action.type === "CLEAR_FILTERS") {
  return {
   ...state,
   filters: {
    text: "",
    brand: "all",
    category: "all",
    color: "all",
    size: "all",
    shipping: false,
   },
   checkedInputs: {},
  };
 }
  if (action.type === "TOGGLE_CHECKBOX") {
    console.log("TOGGLE_CHECKBOX");
    const { name, value } = action.payload;
  return {
   ...state,
   checkedInputs: {
    ...state.checkedInputs,
    [ value]: !state.checkedInputs[ value],
   },
  };
 }

 if (action.type === "SORT_PRODUCTS") {
  const { sort, filteredProducts } = state;
  let tempProducts = [...filteredProducts];

  if (sort === "price-lowest") {
   tempProducts = tempProducts.sort((a, b) => {
    if (a.price > b.price) {
     return 1;                  //sort a after b, e.g. [b, a]
    }
    if (a.price < b.price) {
     return -1;                //sort a before b, e.g. [a, b]
    }
    return 0;
   });
  }

  if (sort === "price-highest") {
   tempProducts = tempProducts.sort((a, b) => {
    if (b.price > a.price) {
     return 1;
    }
    if (b.price < a.price) {
     return -1;
    }
    return 0;
   });
  }

  if (sort === "name-a") {
   tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sort === "name-z") {
   tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  return {
   ...state,
   filteredProducts: tempProducts,
  };
 }

 if (action.type === "UPDATE_FILTERS") {
  const { name, value } = action.payload;
  return {
   ...state,
   filters: { ...state.filters, [name]: value },
  };
 }

 if (action.type === "FILTER_PRODUCTS") {
  const { text, brand, category, shipping, color, size } = state.filters;
  const { allProducts } = state;
  let tempProducts = [...allProducts];

  if (text) {
   tempProducts = tempProducts.filter((product) => {
    return product.name.toLowerCase().startsWith(text);
   });
  }

  if (brand !== "all") {
   tempProducts = tempProducts.filter((product) => {
    return product.brand.toLowerCase() === brand.toLowerCase();
   });
  }
  if (color !== "all") {
   tempProducts = tempProducts.filter((product) => {
    return product.color.toLowerCase() === color.toLowerCase();
   });
  }
  if (size !== "all") {
   tempProducts = tempProducts.filter((product) => {
    return product.size.toLowerCase() === size.toLowerCase();
   });
  }
  if (category !== "all") {
   tempProducts = tempProducts.filter((product) => {
    return product.category.toLowerCase() === category.toLowerCase();
   });
  }

  if (shipping) {
   tempProducts = tempProducts.filter((product) => {
    return product.shipping === true;
   });
  }
  return {
   ...state,
   filteredProducts: tempProducts,
  };
 }
}




 