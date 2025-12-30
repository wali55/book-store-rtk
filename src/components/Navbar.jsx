import { Link, useLocation } from "react-router-dom";
import LogoIcon from "../assets/logo.svg";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchedText } from "../features/booksSlice";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(searchedText(search));
  }, [search]);

  let navClassBook;
  let navClassAdd;
  if (location.pathname === "/") {
    navClassBook = "font-semibold cursor-pointer"
  } else {
    navClassBook = "cursor-pointer"
  }

  if (location.pathname === "/add-book") {
    navClassAdd = "font-semibold cursor-pointer"
  } else {
    navClassAdd = "cursor-pointer"
  }

  return (
    <nav className="py-4 2xl:px-6">
    <div className="container flex items-center justify-between">
      <img src={LogoIcon} width="150px" className="object-contain" />

      <ul className="hidden md:flex items-center space-x-6">
        <Link className={navClassBook} to="/" id="lws-bookStore">
          <li>Book Store</li>
        </Link>
        <Link className={navClassAdd} to="/add-book" id="lws-addBook">
          <li>Add Book</li>
        </Link>
      </ul>

      <form className="flex items-center">
        <div className="group relative rounded-md bg-white">
          <svg width="20" height="20" fill="currentColor"
            className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z">
            </path>
          </svg>
          <input value={search} type="text" placeholder="Filter books..." className="search" id="lws-search" onChange={(e) => setSearch(e.target.value)} />
        </div>
      </form>
    </div>
  </nav>
  )
}

export default Navbar