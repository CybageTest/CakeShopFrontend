import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import CheckForSignin from "./CheckForSignin"

const SignIn = () => {
    return (
        <div className="container">
            <div className="header">
                <Header />
            </div>

            <div className="signin" style={{ position: "absolute", transform: "translate(150%, 150%)" }}>
                <CheckForSignin />
            </div>

            <div className="footer" >
                <div className="fixed-bottom">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default SignIn