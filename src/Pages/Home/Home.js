import { useNavigate } from "react-router"
import Header from "../../Components/Header/Header"
import './home.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import vanillaEggless from '../../Assets/Images/Cakes/vanilla-eggless-cake.jpg';
import teddyCake from '../../Assets/Images/Cakes/cute-teddy-butterscotch-eggless-cake.jpg';
import blackForest from '../../Assets/Images/Cakes/black-forest-cake.jpg';
import CakeService from "../../Service/Cake Service/CakeService";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
    const navigate = useNavigate()

    const [allCakes, setAllCakes] = useState(null)
    const [birthdayCakes, setBirthdayCakes] = useState([])
    const [specialFusionCakes, setSpecialFusionCakes] = useState([])


    useEffect(() => {
        CakeService.fetchAllCakes().then(data => setAllCakes(data))
        CakeService.fetchCakeByOccassions("BIRTHDAY").then(data => setBirthdayCakes(data))
        CakeService.fetchCakeByFlavours("CUSTOM").then(data => setSpecialFusionCakes(data))
    }, [])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    const bestSellersList = allCakes && allCakes.map((cake) => {
        return (
            <div className="best-sellers-list" key={cake.id} style={{ width: "18rem", boxShadow: "5px 10px 15px black", margin: "25px" }}>
                <div className="card">
                    <div className="card-img-bottom"><img src={vanillaEggless} style={{ height: "12rem", width: "16rem", borderRadius: "15px", margin: "1rem" }} /></div>
                    <div className="cakeName" style={{ textAlign: "center" }}><p>{cake.cakeName}</p></div>
                </div>
            </div>
        )
    })

    const birthdayCakeList = birthdayCakes && birthdayCakes.map((cake) => {
        return (
            <div className="birthdayCake-list" key={cake.id} style={{ width: "18rem", boxShadow: "5px 10px 15px black", margin: "25px" }}>
                <div className="card">
                    <div className="card-img-bottom"><img src={teddyCake} style={{ height: "12rem", width: "16rem", borderRadius: "15px", margin: "1rem" }} /></div>
                    <div className="cakeName" style={{ textAlign: "center" }}><p>{cake.cakeName}</p></div>
                </div>
            </div>
        )
    })

    const specialCakesList = specialFusionCakes && specialFusionCakes.map((cake) => {
        return (
            <div className="specialCake-list" key={cake.id} style={{ width: "18rem", boxShadow: "5px 10px 15px black", margin: "25px" }}>
                <div className="card">
                    <div className="card-img-bottom"><img src={blackForest} style={{ height: "12rem", width: "16rem", borderRadius: "15px", margin: "1rem" }} /></div>
                    <div className="cakeName" style={{ textAlign: "center" }}><p>{cake.cakeName}</p></div>
                </div>
            </div>
        )
    })

    return (
        <div className="main-home">
            <Header />
            <br/><br/><br/>
            <div className="carouselHome" style={{ cursor: 'pointer' }}>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={require('../../Assets/Images/Carousel/christmas-web-banner.jpg')} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={require('../../Assets/Images/Carousel/CZ-BANNER-AUG-WEB_BIRTHDAY.jpg')} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={require('../../Assets/Images/Carousel/CZ-BANNER-AUG-WEB_CHEESE-CAKES.jpg')} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={require('../../Assets/Images/Carousel/CZ-BANNER-AUG-WEB_CUSTOM.jpg')} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={require('../../Assets/Images/Carousel/CZ-BANNER-AUG-WEB_FUSION.jpg')} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={require('../../Assets/Images/Carousel/CZ-BANNER-AUG-WEB_HYGIENIC.jpg')} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="cakesByOccassions">
                {/* Best Sellers */}
                <div className="bestSellers">
                    <div className="row" style={{ marginTop: '2%' }}>
                        <div className="col" >
                            <div className="line" style={{ height: '10px', backgroundColor: '#9C0F48', textAlign: 'left', marginTop: '4%' }}>
                                {/* Orange Line */}
                            </div>
                        </div>
                        <div className="col" style={{ textAlign: 'center', fontSize: '25px', fontWeight: 'bolder', color: '#9C0F48' }}>
                            Our Best Sellers
                        </div>
                        <div className="col" >
                            <div className="line" style={{ height: '10px', backgroundColor: '#9C0F48', textAlign: 'right', marginTop: '4%' }}>
                                {/* Orange Line */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="row" >
                            <div className="multi-div-carousel" style={{ border: "1px solid white" }}>
                                {allCakes ?
                                    <Carousel responsive={responsive}>
                                        {bestSellersList}
                                    </Carousel>
                                    : null}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Birthday */}
                <div className="birthdayCakes">
                    <div className="row" style={{ marginTop: '2%' }}>
                        <div className="col" >
                            <div className="line" style={{ height: '10px', backgroundColor: '#9C0F48', textAlign: 'left', marginTop: '4%' }}>
                                {/* Orange Line */}
                            </div>
                        </div>
                        <div className="col" style={{ textAlign: 'center', fontSize: '25px', fontWeight: 'bolder', color: '#9C0F48' }}>
                            Birthday Special Cakes
                        </div>
                        <div className="col" >
                            <div className="line" style={{ height: '10px', backgroundColor: '#9C0F48', textAlign: 'right', marginTop: '4%' }}>
                                {/* Orange Line */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="multi-div-carousel" style={{ border: "1px solid white" }}>
                            {birthdayCakes ?
                                <Carousel responsive={responsive}>
                                    {birthdayCakeList}
                                </Carousel>
                                : null}
                        </div>
                    </div>
                </div>

                {/* special Fusion cakes */}
                <div className="specialFusionCakes">
                    <div className="row" style={{ marginTop: '2%' }}>
                        <div className="col" >
                            <div className="line" style={{ height: '10px', backgroundColor: '#9C0F48', textAlign: 'left', marginTop: '4%' }}>
                                {/* Orange Line */}
                            </div>
                        </div>
                        <div className="col" style={{ textAlign: 'center', fontSize: '25px', fontWeight: 'bolder', color: '#9C0F48' }}>
                            Special Fusion Cakes
                        </div>
                        <div className="col" >
                            <div className="line" style={{ height: '10px', backgroundColor: '#9C0F48', textAlign: 'right', marginTop: '4%' }}>
                                {/* Orange Line */}
                            </div>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="multi-div-carousel" style={{ border: "1px solid white" }}>
                            {specialFusionCakes ?
                                <Carousel responsive={responsive}>
                                    {specialCakesList}
                                </Carousel>
                                : null}
                        </div>
                    </div>
                </div>



            </div>

            <div className="NoraThoughtsAndImage">
                <div className="row">
                    <div className="col">
                        <div className="NoraImage" style={{ marginTop: "10%", marginLeft: "3%", width: '135%', transform: 'translate(15%, 10%)', }}>
                            <img src={require('../../Assets/Images/Nora/morethan-img_norah.jpg')} className="d-block w-100" alt="noraEatingCake" />
                        </div>
                    </div>

                    <div className="col" style={{ transform: 'translate(37%, 50%)', height: '200%', backgroundColor: '#EEEEEE' }}>
                        <p style={{ fontSize: '30px', marginTop: "25px", marginLeft: '3%', fontWeight: 'bolder' }}>More Than Just Cakes</p>
                        <div className="Thoughts" style={{ fontSize: '18px', marginLeft: '3%', marginBottom: "25px", textAlign: 'left' }}>
                            When life gives you a happy occasion, celebrate it with CakeZone! As you bite into our delightful treats you will experience
                            a burst of natural flavor and freshness of ingredients that literally melts in your mouth.
                            We offer an extensive variety of mouth-watering cakes and confections that will undoubtedly make you surrender your senses.
                            Our aim is to deliver you consistent quality and spread happiness by serving smiles in every bite with CakeZone.
                        </div>
                        <div className="shopButton" style={{ marginLeft: '3%', marginBottom: '3%' }}>
                            <button type="button" className="btn" style={{ backgroundColor: '#FD841F', color: 'white' }}>Shop</button>
                        </div>
                    </div>
                    <div className="col" style={{ transform: 'translate(20%, 14%)' }}>
                        <div className="heartImage">
                            <img src={require('../../Assets/Images/others/heart1.jpg')} className="d-block" alt="heart" style={{ width: '15%' }} />
                        </div>
                    </div>

                </div>
            </div>

            <div className="footer">
                <Footer />
            </div>

        </div>
    )
}

export default Home


