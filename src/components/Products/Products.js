import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

//Product That go to Grid
const products = [
  {
    id: 1,
    name: "Band",
    description: "Head Band",
    price: "$10",
    image:
      "https://media.allure.com/photos/5d4340c7dbde5c000828f782/1:1/w_2000,h_2000,c_limit/turban-headband.jpg",
  },
  {
    id: 2,
    name: "Frock",
    description: "Rose Frock",
    price: "$5",
    image:
      "https://5.imimg.com/data5/WA/FG/MY-7083094/ladies-stylish-frock-500x500.jpg",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          //xs = Big Device  // sm = small Devices
          <Grid item Key={product.id} xs={12} sm={6} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
