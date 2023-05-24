import { useSelector } from "react-redux"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"

const AboutUs = () => {

    const user = useSelector((state) => state.user.user)
    console.log("User: "+JSON.stringify(user))

    const cakes = useSelector((state) => state.cake.cakes)
    console.log("Cakes: "+JSON.stringify(cakes))

    return (
        <div className="about-us-main">
            <div className="header">
                <Header/>
            </div>
            <div className="container">
                <div className="about-us" style={{marginTop:"10%"}}>
                    <div className="about-us-title">
                        <hr />
                        <h2>
                            Little Joys- Happiness is enjoying the little things in life
                        </h2>
                        <hr />
                    </div>
                    <div className="about-us-description">
                        Little Joys is an online cake delivery portal offering a new natural style of cakes using quality ingredients,
                        attention to detail with great care, and offering personalized attention in both our services and online shop catering.
                        In our online shop, you can choose creative and seasonal cakes to desserts to create memories on occasions and special events.
                        We have multiple delivery options namely Standard/FREE, Express, On Time, Midnight & Early Morning to help people avail our service anytime
                        throughout the day. We deal with the events entirely with the highly qualified and trained staff to take care of details from product development
                        to completion of the service to make your events a success and above all, our cakes are so delicious that they will always leave you wanting for more!.
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default AboutUs