import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { CgPlayListAdd } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="flex w-screen justify-between bg-[#f8f9fa] text-black shadow-md">
      <Link to="/" className="">
        <h1 className="p-5 font-bold rounded-r-[100px] my-1 border bg-[#68d8d6] w-[125px] hover:w-[175px] text-center duration-200">
          Anime List
        </h1>
      </Link>
      <div className="p-5 flex flex-row-reverse font-bold ">
        <Link
          to="/createList"
          className="flex hover:bg-[#c4fff9] mx-2 text-[30px] px-3 pt-2 pb-1 rounded-xl duration-200 justify-center items-center"
        >
          <CgPlayListAdd />
        </Link>
        <Link
          to="/"
          className="flex hover:bg-[#c4fff9] text-[25px] px-4 py-1 rounded-xl duration-200 justify-center items-center"
        >
          <IoHome />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
