import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="p-5 border-b border flex flex-row-reverse text-sm gap-4 font-bold">
        <Link
          to="/createList"
          className="hover:text-red-500 hover:scale-[1.1] transition-all"
        >
          CreateList
        </Link>
        <Link
          to="/about"
          className="hover:text-red-500 hover:scale-[1.1] transition-all"
        >
          About
        </Link>
        <Link
          to="/"
          className="hover:text-red-500 hover:scale-[1.1] transition-all"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
