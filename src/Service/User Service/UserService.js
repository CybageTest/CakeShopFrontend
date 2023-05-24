import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

class UserService {

    findUserByEmailOrMobile = (emailOrMobile) => {
        const checkUserByEmailOrMobileURL = process.env.REACT_APP_BASE_API_URL_USER + '/findByEmailOrMobile'
        try {
            return axios.get(checkUserByEmailOrMobileURL,
                {
                    params: { mobile: emailOrMobile, email: emailOrMobile }
                }).then(response => response.data)
        } catch (error) {
            return error
        }

    }

    userLogin = createAsyncThunk(
        'user/login',
        async (JWTRequest, { rejectWithValue }) => {
            const createJWTTokenURL = process.env.REACT_APP_BASE_API_URL_USER + '/authenticate'
            try {
                const data = await axios.post(createJWTTokenURL, JWTRequest).then(response => response.data)
                localStorage.setItem('userToken', data.jwtToken)
                localStorage.setItem('userName', data.user.name)
                return data
            } catch (error) {
                if (error.response && error.response.data.message) {
                    return rejectWithValue(error.response.data.message)
                }
            }
        }
    )

    logout = () => {
        localStorage.removeItem('userName')
        localStorage.removeItem('userToken')
    }

    createUser = (user) => {
        const createUserURL = process.env.REACT_APP_BASE_API_URL_USER + '/adduser'
        try {
            return axios.post(createUserURL, user).then(response => response.data)
        } catch (error) {
            return error
        }
    }
}

export default new UserService()