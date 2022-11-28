import React, {useState, useEffect} from 'react'
import Logo from "./../assets/logo.png"
import {MagnifyingGlassIcon, HeartIcon, ShoppingBagIcon} from "@heroicons/react/24/outline";
import { useDispatch } from 'react-redux';
import { setOpenCart } from '../app/CartSlice';
import { useSelector } from 'react-redux';

const Navbar = () => {

    let [navState,
        setNavState] = useState(false);

    let onNavScroll = () => {
        if (window.scrollY > 30) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    }

    let itemsNum = useSelector((state) => state.cart.cartTotalQuantity);

    useEffect(() => {
        window.addEventListener("scroll", onNavScroll);

        return () => {
            window.removeEventListener("scroll", onNavScroll);
        }
    }, []);

    let dispatch = useDispatch();

    let onCartToggle = () => {
      dispatch(setOpenCart({cartState: true}));
    }

    return (
      <header
        className={
          !navState
            ? "absolute top-7 left-0 right-0 z-[100] opacity-100"
            : "fixed top-0 left-0 right-0 h-[9vh] w-full z-[999] opacity-100 flex items-center " +
              "justify-center blur-effect-theme transition-all duration-500"
        }
      >
        <nav className="nike-container flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={Logo}
              alt="logo"
              className={`h-auto w-16 ${navState && "filter brightness-0"}`}
            />
          </div>
          <ul className="flex items-center justify-center gap-2">
            <li className="grid items-center">
              <MagnifyingGlassIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <HeartIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center" onClick={onCartToggle}>
              <button
                type="button"
                className="border-none outline-none active:scale-110 transition-all duration-300 relative"
              >
                <ShoppingBagIcon
                  className={`icon-style ${
                    navState && "text-slate-900 transition-all duration-300"
                  }`}
                />
                <div
                  className={`absolute text-slate-900 top-4 bg-white right-0 w-4 h-4 shadow shadow-slate-200 rounded-full flex items-center justify-center leading-tight font-medium text-[0.9rem] cursor-pointer hover:scale-110 transition-all duration-300 ${navState && "text-slate-200 bg-black"}`}
                >
                  {itemsNum}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Navbar