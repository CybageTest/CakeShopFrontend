import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cakes: [],
    totalAmount: 0
}

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        addToCakes: (state, action) => {
            const itemInCakes = state.cakes.find((item) => item.id === action.payload.id);
            if (itemInCakes) {
                itemInCakes.quantity++;
                itemInCakes.price = action.payload.price * itemInCakes.quantity
            } else {
                let singleCake = action.payload
                delete singleCake.order
                state.cakes.push({
                    ...singleCake,
                    quantity: 1,
                    initalPrice: action.payload.price
                })
            }
        },
        incrementCakeQuantity: (state, action) => {
            const itemInCakes = state.cakes.find((item) => item.id === action.payload.id)
            if (itemInCakes) {
                itemInCakes.quantity++;
                itemInCakes.price = action.payload.price + itemInCakes.initalPrice
            }
        },
        decrementCakeQuantity: (state, action) => {
            const itemInCakes = state.cakes.find((item) => item.id === action.payload.id)
            if (itemInCakes.quantity === 1) {
                const cakeToBeRemoved = state.cakes.filter((item) => item.id !== action.payload.id)
                state.cakes = cakeToBeRemoved
            } else {
                itemInCakes.quantity--;
                itemInCakes.price = action.payload.price - itemInCakes.initalPrice
            }
        },
        totalCakeAmount: (state, action) => {
            const capturedCake = action.payload
            let prices = []
            capturedCake.map((cake) => {
                prices.push(cake.price)
            })
            let result = prices.reduce((sum, price) => sum + price, 0)
            state.totalAmount = result
        },
        removeCakes: (state) => {
            state.cakes = []
            state.totalAmount = 0
        }
    }
})


export const cakeReducer = cakeSlice.reducer
export const {
    addToCakes,
    incrementCakeQuantity,
    decrementCakeQuantity,
    totalCakeAmount,
    removeCakes
} = cakeSlice.actions