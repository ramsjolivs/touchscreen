import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={isActive("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/page1" className={isActive("/page1")}>
            Page 1
          </Link>
        </li>
        <li>
          <Link to="/page2" className={isActive("/page2")}>
            Page 2
          </Link>
        </li>
        <li>
          <Link to="/page3" className={isActive("/page3")}>
            Page 3
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
