import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import UserService from "../../Service/User Service/UserService"


const CheckForSignin = () => {
    const [emailOrMobile, setEmailOrMobile] = useState('')
    const [userToCheck, setUserToCheck] = useState([])
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cake.cakes)

    const jWTRequest = {
        username, password
    }

    useEffect(() => {
        if (userToCheck !== '') {
            setUsername(userToCheck.name)
        }
    })

    const handleLogin = async () => {
        try {
            await UserService.findUserByEmailOrMobile(emailOrMobile).then((response) => {
                setUserToCheck(response)
            })
        } catch (error) {
            toast.warning(error.response.data)
        }
    }

    return (
        <div className="check-email-mobile" >
            {userToCheck.length === 0 ?
                <>
                    <div className="input-email-mobile">
                        <div className="mb-2">
                            <label className="form-label">Enter Mobile or Email</label>
                            <input type="text" className="form-control" onChange={(e) => {
                                setEmailOrMobile(e.target.value)
                            }} />
                        </div>
                        <div className="check-button" style={{ textAlign: "center" }}>
                            <button className="btn"
                                style={{ backgroundColor: "orange" }}
                                onClick={() => {
                                    handleLogin()
                                }}>Submit</button>
                        </div>
                        <div className="registerUser">
                            <p>Don't have an account yet? <Link to='/signup'> Signup here</Link></p>
                        </div>
                    </div>
                </> :
                <>
                    <div className="check-email-password">
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="email" className="form-control" value={userToCheck.name} readOnly />
                        </div>
                        <div class="mb-3">
                            <label className="form-label">Enter Password</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                        </div>
                        <div className="login-button">
                            <button className="btn" style={{ backgroundColor: "orange" }} onClick={async () => {
                                if (password.length === 0) {
                                    toast.warning("Password cannot be blank")
                                } else {
                                    dispatch(UserService.userLogin(jWTRequest)).unwrap().then(async response => {
                                        const data = await response
                                        if (data) {
                                            console.log("Succes user: "+JSON.stringify(data))
                                            if (cart.length === 0) {
                                                navigate('/menu')
                                            } else {
                                                navigate('/cart')
                                            }
                                        }
                                    }).catch(error => toast.error(error))
                                }
                            }}>Login</button>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}



export default CheckForSignin