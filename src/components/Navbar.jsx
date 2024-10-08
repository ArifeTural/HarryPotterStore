import React, { useContext, useState } from "react";
import logo from "../assets/magic-297332_1280.webp";
import { closeNavbar, logoutIcon, openNavbar } from "../helper/icons";
import { NavLink, useLocation} from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const navigation = [
  {
    title: "Anasayfa",
    path: "/dashboard",
  },
  {
    title: "Ürünler",
    path: "/dashboard/products",
  },
  {
    title: "Kitaplar",
    path: "/dashboard/about",
  },
];
const Navbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const {logout} = useContext(AuthContext)

  // console.log(location);
  return (
    <nav className="bg-navbarColor md:text-sm  ">
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8 ">
        <div className="flex items-center justify-between py-5  ">
          <a
            href="https://en.wikipedia.org/wiki/Harry_Potter"
            target="true"
            className="flex items-center gap-2"
          >
            <img src={logo} alt="wikipedia" width={70} height={70} />
            <span className="text-white hover:text-red-900 font-medium">
            Harry Potter Dünyası
            </span>
          </a>
          {/* //* icon md ekranlardan sonra gizlensin diyoruz */}
          <div className="md:hidden">
            <button
              onClick={() => setShow(!show)}
              className="hover:text-red-800 text-white"
            >
              {show ? closeNavbar : openNavbar}
            </button>
          </div>
        </div>
        <div
          className={`${
            show ? "flex flex-col pb-2" : "hidden"
          } md:flex md:flex-row flex-1 items-center `}
        >
          <ul className="md:flex md:space-x-6">
            {navigation.map((item) => (
              <li
                className="text-gray-400 font-medium flex justify-center "
                key={item.title}
                onClick={() => setShow(false)}
              >
                <NavLink
                  className={`block hover:bg-main rounded-full py-2 px-4 hover:text-white ${
                    location.pathname === item.path
                      ? "underline scale-110 "
                      : ""
                  } `}
                  to={item.path}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex-1 item-center justify-end text-white gap-x-6 mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <NavLink 
            onClick={logout}
            className="flex items-center justify-center gap-x-1 py-2 px-4 font-medium text-red-800 hover:text-white rounded-full md:inline-flex">
            ÇIKIŞ {logoutIcon}

            </NavLink>
          </div>
     
        </div>
      </div>
    </nav>
  );
};

export default Navbar;