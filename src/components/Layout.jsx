import { Outlet, Link } from "react-router-dom";
import "../style/Layout.module.css";
const Layout = () => {
  return (
    <>
      <nav>
        <h1
        className="wishHead" style={{ fontSize: "20px", color:" rgb(100, 100, 213)"}}
         >Bags</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
          <li>
            <Link to="/Wishlist">Wishlist</Link>
          </li>
          <li>
            <Link to="/Basket">Basket</Link>
          </li>
          <li>
            <Link to="/Table">Table</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
