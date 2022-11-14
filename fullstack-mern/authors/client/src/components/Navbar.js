import React from "react";
import { Link, useParams } from "react-router-dom";

const Navbar = () => {
  console.log(
    // idea to conditionally render links/buttons in navbar depending on route
    window.location.href ===
      "http://localhost:3000/authors/edit/6371e1c8243389fb8ed7d835"
  );
  return (
    <nav>
      <button>
        <Link className="link" to="/">
          Home
        </Link>
      </button>
      <button>
        <Link className="link" to="/create">
          Add an Author
        </Link>{" "}
      </button>
    </nav>
  );
};

export default Navbar;
