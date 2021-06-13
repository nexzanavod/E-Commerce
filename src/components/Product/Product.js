import React from "react";
import Grid from "@material-ui/core";

//Product That go to Grid
const product = [
  {
    id: 1,
    name: "Band",
    description: "Head Band",
  },
  {
    id: 2,
    name: "Frock",
    description: "Rose Frock",
  },
];

const Product = () => {
  <main>
    <Grid container justify="center" spacing={4}>
      {product.map((product) => (
        //xs = Big Device  // sm = small Devices
        <Grid item Key={product.id} xs={12} sm={6} lg={3}>
          <Product />
        </Grid>
      ))}
    </Grid>
  </main>;
};

export default Product;
