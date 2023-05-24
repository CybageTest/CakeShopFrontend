import { createSlice } from "@reduxjs/toolkit"
import UserService from "../../Service/User Service/UserService"


const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null

const initialState = {
    user: [],
    loading: false,
    userToken,
    error: null,
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.user = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(UserService.userLogin.pending, state => {
            state.loading = true
            state.error = false
        })
        builder.addCase(UserService.userLogin.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
        })
        builder.addCase(UserService.userLogin.fulfilled, (state, action) => {
            state.loading = false
            // let foundUser=action.payload.user
            // delete foundUser.order
            console.log(action.payload.user)
            state.user = action.payload.user
            state.userToken = action.payload.jwtToken
        })

    }
})

export const userReducer = userSlice.reducer
export const{
    logoutUser
}=userSlice.actions