// import { Table } from "@chakra-ui/react";
import Cards from "./components/Cards";
import Sortedbuttons from "./components/SortedButtons";
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
      <h1
        style={{
          fontSize: "25px",
          backgroundColor: " rgb(100, 100, 213)",
          padding: "15px",
          marginBottom: "30px",
          color: "rgb(18, 18, 138)",
        }}
      >
        Home
      </h1>
      {isLogged ? (
        // <Table products={products} setProducts={setProducts} users={users} setUsers={setUsers} />
        <>
          <Sortedbuttons products={products} setProducts={setProducts} />
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
        </>
      ) : null}
    </div>
  );
}

export default Home;
