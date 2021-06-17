import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  // MenuItem,
  // Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { classExpression } from "@babel/types";

import Logo from "../../assets/Logo.png";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  return (
    <>
      <AppBar
        position="fixed"
        className={classExpression.appBar}
        color="inherit"
      >
        <Toolbar>
          <Typography varient="h6" className={classes.appBar} color="inherit">
            <img src={Logo} alt="" height="25px" className={classes.image} />
            Commerce.js
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart item" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
