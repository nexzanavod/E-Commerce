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
  },
  {
    id: 2,
    name: "Frock",
    description: "Rose Frock",
    price: "$5",
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
