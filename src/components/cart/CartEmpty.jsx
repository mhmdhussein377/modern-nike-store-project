import {ArrowLeftIcon} from '@heroicons/react/24/solid'
import React from 'react'
import EmptyBag from "./../../assets/emptybag.png"

const CartEmpty = ({onCartToggle}) => {
    return (
        <div
            className="flex flex-col items-center justify-center h-screen px-11 text-center gap-7">
            <img
                src={EmptyBag}
                alt="Empty Bag"
                className="w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110"/>
            <button
                type="button"
                className="button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900 py-2 px-5 gap-3 text-sm font-semibold active:scale-110 transition-all duration-300"
                onClick={onCartToggle}>
                <ArrowLeftIcon className="w-5 h-5 text-slate-900"/>
                <span className="">Back To Nike Store</span>
            </button>
        </div>
    );
}

export default CartEmpty