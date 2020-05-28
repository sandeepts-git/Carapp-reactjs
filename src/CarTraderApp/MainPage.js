import React, { useContext } from 'react';
import NavBar from './NavBar'
import Carousal from './Carousal';
import { MyContext } from '../contextData/MyContext';
import { Link } from 'react-router-dom';



const MainPage = () => {

    const { state: { latestCars, bestSellerCars } } = useContext(MyContext)
    return (
        <>
            <div className="bg-color">
                {window.scrollTo(0, 0)}
                <Carousal></Carousal>

                <br></br>
                <div class="container border  mt-4 border my-2" >
                    <h2 className="text-white">Latest cars</h2>
                    <hr />
                    <div class="row">

                        {latestCars.map(car => {
                            return (
                                <div class="cardclass card mt-3 mx-2 my-2 col-xl-3 col-lg-6 col-md-5 col-xs-12  pt-3" style={{ width: '20rem' }}>
                                    <div class="ribbon">
                                        <span class="text-white bg-dark">Most Popular</span></div>
                                    <img class="card-img-top h1" height="150px" src={car.img} alt="Card image cap"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">{car.carName}</h5>
                                        <hr />
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-6">
                                            <h5>Cost</h5>
                                            <p>{car.Price}Lakh</p>
                                        </div>
                                        <div class="col-xl-6">
                                            <h5>RATING</h5>
4.0<span class="fa fa-star checked"></span>
                                            <span class={`fa fa-star checked`} ></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star"></span>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}


                        <div class=" mx-auto d-flex  align-items-center  ">

                            <Link to="/cars">   <button class="btn btn-primary">view All</button></Link>
                        </div>


                    </div>

                </div>

                <br></br>
                <div class=" container border border my-2"  >
                    <h2 className="text-white">Best selling cars</h2>
                    <hr />
                    <div class="row">

                        {bestSellerCars.map(car => {
                            return (
                                <div class="cardclass card mt-3 mx-2 my-2 col-xl-3 col-lg-6 col-md-6 col-xs-12 pt-3" style={{ width: '20rem' }}>
                                    <div class="ribbon">
                                        <span class="text-white bg-dark">Most Popular</span></div>
                                    <img class="card-img-top h1" height="150px" src={car.img} alt="Card image cap"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">{car.carName}</h5>
                                        <hr />
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-6">
                                            <h5>Cost</h5>
                                            <p>{car.Price}Lakh</p>
                                        </div>
                                        <div class="col-xl-6">
                                            <h5>RATING</h5>
4.0<span class="fa fa-star checked"></span>
                                            <span class={`fa fa-star checked`} ></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star"></span>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}


                        <div class=" mx-auto d-flex  align-items-center  ">

                            <Link to="/cars">   <button class="btn btn-primary">view All</button> </Link>
                        </div>


                    </div>

                </div>



                <br></br>

                <div class="container border my-2" style={{ backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)" }}>
                    <h2>Top Brands</h2>
                    <hr />
                    <div class="row pb-4">

                        <img src="https://www.carlogos.org/car-logos/ford-logo.png" class="border p-1 img-fluid col-2" height="150px" width="150px"></img>
                        <img src="https://www.carlogos.org/car-logos/toyota-logo.png" class="border p-1 img-fluid col-2" height="150px" width="150px"></img>
                        <img src="https://www.carlogos.org/car-logos/volkswagen-logo.png" class="border p-1 img-fluid col-2" height="150px" width="150px"></img>
                        <img src="https://www.carlogos.org/logo/Tata-logo-2000-640x550.jpg" class="border p-1 img-fluid col-2" height="150px" width="150px"></img>
                        <img src="http://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19714.png" class="border p-1 img-fluid col-2" height="150px" width="150px"></img>
                        <img src="https://www.freepnglogos.com/uploads/audi-logo-0.gif" class="border p-1 img-fluid col-2" height="150px" width="150px"></img>
                    </div>


                </div>
                <br>
                </br>
                <br></br>
            </div>
        </>
    )
}

export default MainPage
