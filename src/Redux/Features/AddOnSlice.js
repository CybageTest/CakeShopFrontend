import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addons: [],
    totalAmount: 0
}

const addOnSlice = createSlice({
    name: "addon",
    initialState,
    reducers: {
        addToAddons: (state, action) => {
            const itemInAddOn = state.addons.find((addon) => addon.id === action.payload.id);
            if (itemInAddOn) {
                itemInAddOn.quantity++;
                itemInAddOn.price = action.payload.price * itemInAddOn.quantity
            } else {
                let singleAddon = action.payload
                delete singleAddon.order
                state.addons.push({
                    ...singleAddon,
                    quantity: 1,
                    initalPrice: action.payload.price
                })
            }
        },
        incrementAddonsQuantity: (state, action) => {
            const itemInAddOn = state.addons.find((item) => item.id === action.payload.id)
            if (itemInAddOn) {
                itemInAddOn.quantity++;
                itemInAddOn.price = action.payload.price + itemInAddOn.initalPrice
            }
        },
        decrementAddonsQuantity: (state, action) => {
            const itemInAddOn = state.addons.find((item) => item.id === action.payload.id)
            if (itemInAddOn.quantity === 1) {
                const addonToBeRemoved = state.addons.filter((item) => item.id !== action.payload.id)
                state.addons = addonToBeRemoved
            } else {
                itemInAddOn.quantity--;
                itemInAddOn.price = action.payload.price - itemInAddOn.initalPrice
            }
        },
        totalAddonAmount: (state, action) => {
            const capturedAddon = action.payload
            let prices = []
            if (capturedAddon !== 0) {
                capturedAddon.map((addon) => {
                    prices.push(addon.price)
                })
            }
            let result = prices.reduce((sum, price) => sum + price, 0)
            state.totalAmount = result
        },
        removeAddon: (state) => {
            return state
        }
    }
})

export const addonReducer = addOnSlice.reducer
export const {
    addToAddons,
    incrementAddonsQuantity,
    decrementAddonsQuantity,
    totalAddonAmount,
    removeAddon
} = addOnSlice.actions