import Layout from "./components/Layout";
import Home from "./Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Wishlist from "./components/Wishlist";
import Basket from "./components/Basket";
import ReactDOM from "react-dom/client";

import axios from "axios";

import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Big() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLogged, setisLogged] = useState(false);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [pass, seyPass] = useState("");
  const [email, setEmail] = useState("");
  const [WishlistState, setWishlistState] = useState([]);
  const [BasketState, setBasketState] = useState([]);

  useEffect(() => {
    axios("https://6549a154e182221f8d51b8a0.mockapi.io/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);

  useEffect(() => {
    axios("https://6549a154e182221f8d51b8a0.mockapi.io/products").then(
      (res) => {
        // console.log(res.data);
        setProducts(res.data);
      }
    );
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home
                isLogged={isLogged}
                setisLogged={setisLogged}
                products={products}
                setProducts={setProducts}
                users={users}
                setUsers={setUsers}
                WishlistState={WishlistState}
                setWishlistState={setWishlistState}
                BasketState={BasketState}
                setBasketState={setBasketState}
              />
            }
          />
          <Route
            path="Login"
            element={
              <Login
                isLogged={isLogged}
                setisLogged={setisLogged}
                users={users}
                setUsers={setUsers}
              />
            }
          />
          <Route
            path="Register"
            element={<Register users={users} setUsers={setUsers} />}
          />
          <Route
            path="Wishlist"
            element={
              <Wishlist
                products={products}
                setProducts={setProducts}
                WishlistState={WishlistState}
                setWishlistState={setWishlistState}
              />
            }
          />
          <Route
            path="Basket"
            element={
              <Basket
                products={products}
                setProducts={setProducts}
                BasketState={BasketState}
                setBasketState={setBasketState}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Big;
