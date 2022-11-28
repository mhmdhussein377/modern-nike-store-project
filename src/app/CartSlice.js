import {createSlice} from "@reduxjs/toolkit"
import {toast} from "react-hot-toast"

let initialState = {
    cartState: false,
    cartItems: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
};

let CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setOpenCart: (state, action) => {
            state.cartState = action.payload.cartState;
        },
        setCloseCart: (state, action) => {
            state.cartState = action.payload.cartState;
        },
        setAddItemsToCart: (state, action) => {
            let itemIndex = state
                .cartItems
                .findIndex((item) => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity++;

                toast.success(`Item QTY Increased`);
            } else {
                let temp = {
                    ...action.payload,
                    cartQuantity: 1
                };
                state
                    .cartItems
                    .push(temp);

                toast.success(`${action.payload.title} added to cart`)
            }

            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setRemoveItemFromCart: (state, action) => {
            state.cartItems = state
                .cartItems
                .filter((item) => item.id !== action.payload.id);

            toast.success(`${action.payload.title} Removed From Cart`);

            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setIcreaseItemQuantity: (state, action) => {
            let itemIndex = state
                .cartItems
                .findIndex((item) => item.id === action.payload.id)

            state.cartItems[itemIndex].cartQuantity += 1;

            toast.success("Item QTY Increased");

            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setDecreaseItemQuantity: (state, action) => {
            let itemIndex = state
                .cartItems
                .findIndex((item) => item.id === action.payload.id);

            if (state.cartItems[itemIndex].cartQuantity === 1) {
                state.cartItems = state
                    .cartItems
                    .filter((item) => item.id !== action.payload.id);

                toast.success(`${action.payload.title} Removed From Cart`)
            } else {
                state.cartItems[itemIndex].cartQuantity -= 1;

                toast.success(`Item QTY Decreased`);
            }

            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setClearCartItems: (state, action) => {
            state.cartItems = [];
            toast.success("Cart Has Been Cleared");
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setGetTotal: (state, action) => {
            let { totalAmount, totalQTY } = state.cartItems.reduce((cartTotal, cartItem) => {
                let { price, cartQuantity } = cartItem;
                let totalPrice = price * cartQuantity;

                cartTotal.totalAmount += totalPrice;
                cartTotal.totalQTY += cartQuantity;

                return cartTotal;
            }, {
                totalAmount: 0,
                totalQTY: 0,
            });

            state.cartTotalAmount = totalAmount;
            state.cartTotalQuantity = totalQTY;
        }
    }
});

export let {
    setOpenCart,
    setCloseCart,
    setAddItemsToCart,
    setRemoveItemFromCart,
    setIcreaseItemQuantity,
    setDecreaseItemQuantity,
    setClearCartItems,
    setGetTotal,
} = CartSlice.actions;
export default CartSlice.reducer;