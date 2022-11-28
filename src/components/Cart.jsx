import React, { useEffect } from "react";
import {useDispatch} from "react-redux";
import {setCloseCart, setGetTotal} from "../app/CartSlice";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import {useSelector} from "react-redux";

const Cart = () => {
    let cartState = useSelector((state) => state.cart.cartState);

    let dispatch = useDispatch();

    let onCartToggle = () => {
        dispatch(setCloseCart({cartState: false}));
    };

    let cartItems = useSelector((state) => state.cart.cartItems);

    useEffect(() => {
        dispatch(setGetTotal());
    },[cartItems]);

    let totalAmount = useSelector((state) => state.cart.cartTotalAmount);
    let totalQTY = useSelector((state) => state.cart.cartTotalQuantity);

    return (
        <div
            className={`fixed top-0 right-0 left-0 bottom-0 w-full h-screen blur-effect-theme opacity-100 z-[999] ${cartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible -translate-x-[100%]"}`}>
            <div className={`blur-effect-theme h-screen w-full max-w-xl absolute top-0 right-0`}>
                <CartCount onCartToggle={onCartToggle} totalQTY={totalQTY}/>{" "} {cartItems.length === 0
                    ? (<CartEmpty onCartToggle={onCartToggle}/>)
                    : (
                        <div>
                            <div className="flex flex-col gap-y-5 lg:gap-y-4 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-2">
                                {cartItems.map((item, index) => (<CartItem key={index} item={item}/>))}
                            </div>

                            <div className="fixed bottom-0 w-full px-5 py-2 grid items-center ">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                                    <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">$   {totalAmount}</h1>
                                </div>
                                <div className="grid items-center gap-2">
                                    <p className="text-sm font-medium text-center">Taxes and Shipping Will Calculate At Shipping</p>
                                    <button type="button" className="bg-theme-cart button-theme text-white ">Check Out</button>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Cart;
