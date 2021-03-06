import React from "react";

export const ProductsContext = React.createContext({
  produts: [],
});

export default (props) => {
  const [productsList, setProductsList] = React.useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);
  return (
    <ProductsContext.Provider value={{ produts: productsList }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
