import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import UserService from "../../Service/User Service/UserService"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

const Signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [mobile, setMobile] = useState('')
    const navigate = useNavigate()

    const userToCreate = {
        name,
        email,
        password,
        mobile
    }

    const handleRegister = async () => {
        if (name.length < 2 || name.length > 25) {
            toast.warning("Username must be between 2 and 25 characters")
        } else
            if (!email.includes("@") || !email.endsWith(".com")) {
                toast.warning("Please enter a valid email address")
            } else
                if (password.length < 6 || password.length > 15) {
                    toast.warning("Password must be between 6 and 15 characters")
                } else
                    if (checkPassword != password) {
                        toast.warning("Password does not match")
                    } else
                        if (mobile.length != 10) {
                            toast.warning("Please enter a valid Mobile Number")
                        } else {
                            try {
                                await UserService.createUser(userToCreate)
                                navigate('/signin')
                            } catch (error) {
                                toast.error(error.response.data)
                            }
                        }
    }


    return (
        <div className="container">
            <div className="header">
                <Header />
            </div>
            <div className="signup">
                <br /><br /><br />
                <div className="row">
                    <div className="col">
                        {/* empty div for alignment */}
                    </div>
                    <div className="col">
                        {/* signup form */}
                        <div className="title" style={{ textAlign: "center", fontFamily: "sans-serif", fontSize: "30px", marginBottom: "5px" }}>
                            Signup
                        </div>
                        <div className="signup-form">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingName" value={name} placeholder="Username"
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }} />
                                <label htmlFor="floatingName">Username</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingEmail" value={email} placeholder="Email address"
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} />
                                <label htmlFor="floatingEmail">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" value={password} placeholder="Password"
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingCheckPassword" value={checkPassword} placeholder="Re-enter Password"
                                    onChange={(e) => {
                                        setCheckPassword(e.target.value)
                                    }} />
                                <label htmlFor="floatingCheckPassword">Re-enter password </label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="tel" className="form-control" id="floatingMobile" value={mobile} placeholder="Mobile"
                                    onChange={(e) => {
                                        setMobile(e.target.value)
                                    }} />
                                <label htmlFor="floatingMobile">Mobile</label>
                            </div>

                            <div className="already-exist">
                                <p>Already a member? <Link to='/signin'>Log In</Link> </p>
                            </div>

                            <div className="Signup-button" onClick={() => {
                                handleRegister()
                            }} style={{ textAlign: "center" }}>
                                <button className="btn btn-success">
                                    Signup
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {/* empty div for alignment */}
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Signup