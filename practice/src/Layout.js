import { Outlet, Link } from "react-router-dom";
import React from "react";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* a 標籤會變成 Link, href 會變成 to="" */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
