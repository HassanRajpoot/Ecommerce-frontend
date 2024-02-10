import { useState } from "react";
import {
    FaSearch,
    FaShoppingBag
} from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="header">
      <Link onClick={() => setIsOpen(false)} to={"/"}>
        HOME
      </Link>
      <Link onClick={() => setIsOpen(false)} to={"/search"}>
        <FaSearch />
      </Link>
      <Link onClick={() => setIsOpen(false)} to={"/cart"}>
        <FaShoppingBag />
      </Link>
    </nav>
  );
};

export default Header;