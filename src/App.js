import React, { useState, useEffect } from "react";

//Backend API
import { commerce } from "./lib/commerce";

//Easy Way to Import
import { Products, Navbar } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };
  return (
    <div>
      <Navbar />
      <Products />
    </div>
  );
};

export default App;
