// import { Table } from "@chakra-ui/react";
import Cards from "./components/Cards";
import Table from "./components/Table";
import React from "react";

function Home({
  isLogged,
  setisLogged,
  products,
  setProducts,
  users,
  setUsers,
  WishlistState,
  setWishlistState,
  BasketState,
  setBasketState,
}) {
  return (
    <div>
      <button>BABE here is home!</button>
      {isLogged ? (
        // <Table products={products} setProducts={setProducts} users={users} setUsers={setUsers} />

        <Cards
          products={products}
          setProducts={setProducts}
          users={users}
          setUsers={setUsers}
          WishlistState={WishlistState}
          setWishlistState={setWishlistState}
          BasketState={BasketState}
          setBasketState={setBasketState}
        />
      ) : null}
    </div>
  );
}

export default Home;
