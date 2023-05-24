import './footer.css'
import cakeLogo from '../../Assets/Images/Logos/CakeLogo.png'
import { Link, useNavigate } from 'react-router-dom'
import gmailLogo from '../../Assets/Images/Logos/gmail.png'
import whatsappLogo from '../../Assets/Images/Logos/whatsapp.png'
import googleMapsLogo from '../../Assets/Images/Logos/googleMaps.png'
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';

const Footer = () => {

    const navigate = useNavigate()

    const copyrightYear = () => {
        return new Date().getFullYear()
    }

    return (
        <div className="footer-main">
            <div className="website-address">
                <div className="row">
                    <div className="col">
                        {/* title */}
                        <div className="cake-logo">
                            <img src={cakeLogo} alt='cake-logo' style={{ marginLeft: "50px", width: "100px", height: "100px" }} />
                        </div>
                    </div>
                    <div className="col">
                        {/* address */}
                        <div className="location-address" style={{ display: "flex" }}>
                            <div className="location-icon">
                                <img src={googleMapsLogo} width={30} alt='google-maps-logo' />
                            </div>
                            <div className="address">
                                <span>
                                    25/A1, West Ave, Opp to Nagarwala School, Talera Park Society,
                                    Prathamesh Society, Kalyani Nagar, Pune, Maharashtra 411006
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {/* whatsapp and other things */}
                        <div className="whatsapp-icon">
                            <span>
                                <img src={whatsappLogo} width={30} alt='whatsapp-logo' />
                                &nbsp; 
                                <a href='https://wa.me/9850909703' style={{ color: "black" }}>WhatsApp Us</a>
                            </span>
                        </div>
                    </div>
                    <div className="col">
                        {/* whatsapp and other things */}
                        <div className="email-address">
                            <div className="email">
                                <span>
                                    <img src={gmailLogo} width={30} alt='gmail-logo' />
                                    &nbsp;
                                    <a href='mailto:help@littlejoys.com' style={{ color: "black" }}>help@littlejoys.com</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="funky-title" style={{ display: "grid", marginLeft: "40px" }}>
                        <h3>Freshly Baked...</h3>
                        <h2>Hand Decorated</h2>
                        <h1 className='fancy-text'>CAKES!!!</h1>
                    </div>
                </div>
                <div className="col">
                    <div className="information">
                        <div className="information-title">
                            Information
                        </div>
                        <div className="information-content">
                            <span><Link to='/about-us'>About Us</Link></span>
                            <span><Link to='/privacy-policy'>Privacy Policy</Link></span>
                            <span><Link to='/privacy-policy'>Refund Policy</Link></span>
                            <span><Link to='/privacy-policy'>Terms of use</Link></span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="top-categories" onClick={() => {
                        navigate('/menu')
                    }}>
                        <div className="top-categories-title">
                            Top Categories
                        </div>
                        <div className="top-categories-list">
                            <span>Chocolate</span>
                            <span>Special Days Cakes</span>
                            <span>Egg Cakes</span>
                            <span>Eggless Cakes</span>
                            <span>Anniversary Cakes</span>
                            <span>Valentine Special Cakes</span>
                            <span>Cheesecake </span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="locations">
                        <div className="locations-title">
                            Location
                        </div>
                        <div className="locations-list">
                            <span>Pune</span>
                            <span>Mumbai</span>
                            <span>Delhi</span>
                            <span>Bengalore</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <span>
                    ©
                    {copyrightYear()},
                    Cybage Software PVT LTD
                </span>
            </div>
        </div>
    )
}

export default Footer