import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalFinalAmount: 0,
    amountBeforeGST: 0,
    gstAmount: 0,
    shippingCost: 50
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToBeforeGSTAmount: (state, action) => {
            state.amountBeforeGST = action.payload
        },
        applyGST: (state) => {
            state.gstAmount = (state.amountBeforeGST * 18) / 100
        },
        addToTotalFinalAmount: (state, action) => {
            state.totalFinalAmount = action.payload
        },
        addShippingCost: (state) => {
            state.shippingCost = 50
        },
        removeShippingCost: (state) => {
            state.shippingCost = 0
        },
        initializeCart: (state) => {
            state.totalFinalAmount = 0
            state.amountBeforeGST = 0
            state.gstAmount = 0
            state.shippingCost = 50
        }

    }
})

export const cartReducer = cartSlice.reducer
export const {
    addToTotalFinalAmount,
    applyGST,
    addToBeforeGSTAmount,
    removeShippingCost,
    addShippingCost,
    initializeCart
} = cartSlice.actions


