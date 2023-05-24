import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    offer: [],
    discount: 0,
    discountedPrice: 0,
    cartTotal: 0
}

const offerSlice = createSlice({
    name: "offer",
    initialState,
    reducers: {
        addToDiscount: (state, action) => {
            state.discount = action.payload
        },
        applyDiscount: (state) => {
            state.discountedPrice = (state.cartTotal * state.discount) / 100
            // let discount = (finalAmount * offer.discount) / 100
            // finalAmount = finalAmount - ((finalAmount * offer.discount) / 100)
            // console.log("Fional: " + finalAmount)

        },
        removeDiscount: (state) => {
            state.discount = 0
            state.discountedPrice = 0
        },
        addToCartTotal: (state, action) => {
            state.cartTotal = action.payload
        },
        addOfferToCart: (state, action) => {
            const offerInCart = state.offer.find((offer) => offer.id === action.payload.id)
            if (offerInCart) {
                toast.warning("Offer already applied..!")
            } else {
                state.offer.push(action.payload)
            }
        },
        removeOfferFromCart: (state) => {
            state.offer = []
        }
    }
})

export const offerReducer = offerSlice.reducer

export const {
    addToDiscount,
    applyDiscount,
    removeDiscount,
    addToCartTotal,
    addOfferToCart,
    removeOfferFromCart
} = offerSlice.actions