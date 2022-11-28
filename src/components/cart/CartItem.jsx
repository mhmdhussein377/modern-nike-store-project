import React from 'react'
import {MinusIcon, PlusIcon, TrashIcon} from "@heroicons/react/24/outline";
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {setDecreaseItemQuantity, setIcreaseItemQuantity, setRemoveItemFromCart} from '../../app/CartSlice';

const CartItem = ({
    item: {
        id,
        color,
        shadow,
        title,
        text,
        img,
        price,
        cartQuantity
    }
}) => {

    let dispatch = useDispatch();

    let handleRemoveItem = () => {
        dispatch(setRemoveItemFromCart({id, title}));
    }

    let handleIncreaseItemQuantity = () => {
        dispatch(setIcreaseItemQuantity({id}));
    }

    let handleDecreaseItemQuantity = () => {
        dispatch(setDecreaseItemQuantity({id, title}))
    }

    return (
        <div className="flex items-center justify-between px-5 my-2 w-full">
            <div className="flex items-center gap-5">
                <div
                    className={`bg-gradient-to-b ${color} ${shadow} rounded p-3 hover:scale-105 transition-all duration-200 ease-in-out grid items-center relative`}>
                    <img src={img} alt={title} className="w-36 object-fill h-auto lg:w-28"/>
                    <div
                        className="absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded font-semibold">$ {price}</div>
                </div>
                <div className="grid items-center gap-4">
                    <div className="grid items-center leading-none">
                        <h1 className="font-medium text-lg lg:tex-sm text-slate-900">
                            {title}
                        </h1>
                        <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
                    </div>
                    <div className="flex items-center justify-around w-full">
                        <button
                            type="button"
                            className="bg-theme-cart rounded w-5 h-5 lg:h-4 lg:w-4 flex items-center justify-center active:scale-90"
                            onClick={handleDecreaseItemQuantity}>
                            <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]"/>
                        </button>
                        <div
                            className="bg-theme-cart text-white rounded font-medium lg:text-sm w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center">
                            {cartQuantity}
                        </div>
                        <button
                            type="button"
                            className="bg-theme-cart rounded w-5 h-5 lg:h-4 lg:w-4 flex items-center justify-center active:scale-90"
                            onClick={handleIncreaseItemQuantity}>
                            <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]"/>
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid items-center gap-5">
                <div className="grid items-center justify-center">
                    <h1 className="text-lg lg:text-base text-slate-900 font-medium">
                        ${price * cartQuantity}
                    </h1>
                </div>
                <div className="grid items-center justify-center">
                    <button
                        type="button"
                        className="bg-theme-cart rounded w-6 h-6 lg:h-5 lg:w-5 flex items-center justify-center active:scale-90 p-1 lg:p-0.5"
                        onClick={handleRemoveItem}>
                        <TrashIcon className="w-7 h-7 lg:w-5 lg:h-5 text-white"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem

// id, color, shadow, title, text, img, rating, price, cartQuantity;