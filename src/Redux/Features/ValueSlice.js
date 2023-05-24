import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    valueToFind: '',
    valueToRender: 'allcakes'
}

const valueSlice = createSlice({
    name: "value",
    initialState,
    reducers: {
        changeValueToFind: (state, action) => {
            state.valueToFind = action.payload
        },
        changeValueToRender: (state, action) => {
            state.valueToRender = action.payload
        }
    }
})

export const valueReducer = valueSlice.reducer
export const {
    changeValueToFind,
    changeValueToRender
} = valueSlice.actions