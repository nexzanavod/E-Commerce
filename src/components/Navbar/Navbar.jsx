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

import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/Logo.png";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <>
      <AppBar
        position="fixed"
        className={classExpression.appBar}
        color="inherit"
      >
        <Toolbar>
          <Typography
            component={Link}
            to="./"
            varient="h6"
            className={classes.appBar}
            color="inherit"
          >
            <img src={Logo} alt="" height="25px" className={classes.image} />
            Commerce.js
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="./cart"
                aria-label="Show cart item"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
