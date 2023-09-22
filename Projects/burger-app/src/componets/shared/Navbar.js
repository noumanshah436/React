import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container-fuild">
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Burger App
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
