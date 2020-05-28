import React, { useContext } from 'react';
import NavBar from './NavBar';
import { MyContext } from '../contextData/MyContext'
import { Link } from 'react-router-dom';
import "../App.css";

const SecondPage = () => {
    const { state: { cars, filterbox, price, filterfuel }, handleThirdPage, handleByBrand, handleByPrice, handleByType } = useContext(MyContext)
    return (
        <>
            <div className="bgimage">
                {window.scrollTo(0, 0)}
                <div className="row mt-2 ml-4" >

                    <div className="col-2 mr-2">
                        <div class="border fff">
                            <div className="dropdown">


                                <a className="dropdown-item text-center font-weight-bolder bg-light " data-toggle="collapse" aria-expanded="true" href="#d-down">Filter by Brand</a>
                                <ul className="collapse list-unstyled" id="d-down" >
                                    {filterbox.map((a, i) => {
                                        return (
                                            <li className="list list-item mx-5 my-1 px-2">
                                                <input type="checkbox" value={a.brandvalue} onChange={(e) => {
                                                    handleByBrand(e, i)

                                                }} checked={a.brandcheck ? "checked" : ""}></input><span className="text-white">{a.brandvalue}</span>
                                            </li>
                                        )
                                    })}

                                </ul>


                            </div>
                            <div className="dropdown">
                                <a className="dropdown-item text-center font-weight-bolder bg-light " data-toggle="collapse" aria-expanded="true" href="#d-down1">Filter by Price</a>
                                <ul className="collapse list-unstyled" id="d-down1" >
                                    {filterbox.map((a, i) => {
                                        return (
                                            <li className="list list-item text-center my-1">

                                                <input type="checkbox" value={a.pricevalue} checked={a.pricecheck ? "checked" : ""} onChange={(e) => {
                                                    handleByPrice(e, i)

                                                }}></input><span className="text-white">Below {a.pricevalue} Lakhs</span>
                                            </li>

                                        )
                                    })}

                                </ul>


                            </div>
                            <div className="dropdown">
                                {console.log("comp", price)}

                                <a className="dropdown-item text-center font-weight-bolder bg-light " data-toggle="collapse" aria-expanded="false" href="#d-down2">Filter by Fuel Type</a>
                                <ul className="collapse list-unstyled" id="d-down2" >
                                    {filterfuel.map((a, i) => {
                                        return (
                                            <li className="list list-item mx-5 my-1 px-2">
                                                <input type="checkbox" value={a.type} checked={a.check ? "checked" : ""} onChange={(e) => {
                                                    handleByType(e, i)

                                                }}></input><span className="text-white">{a.type} Cars</span>
                                            </li>
                                        )
                                    })}

                                </ul>


                            </div>
                        </div>
                    </div>
                    <div className="col-8 ml-5">
                        <div class="text-white ">
                            <p> Selected Brand: {filterbox.map(a => a.brandcheck ? <span>"{a.brandvalue}", </span> : '')}</p>
                            <p> Price Range: {filterbox.map(a => a.pricecheck ? <span>Below "{a.pricevalue}" Lakhs, </span> : '')}</p>
                            <p> Fuel Type: {filterfuel.map(a => a.check ? <span>"{a.type}", </span> : '')}</p>
                            <h2 class="text-white ">Total cars found:{cars.length}</h2>
                        </div>

                        <div className="row mt-4">

                            {
                                !cars.length ? (<div>
                                    <h1>There are no such cars</h1>
                                </div>) : (

                                        cars.map((car, i) => {
                                            return (
                                                <>
                                                    <div className="card cardclass mx-2 my-2 p-2" style={{ width: '20rem' }}>
                                                        <img className="card-img-top border border-secondary h1" height="150px" src={car.img} alt="Card image cap" />
                                                        <div className="card-body p-0">
                                                            <h3 className="card-title  font-weight-bold">{car.carName}</h3>
                                                            <hr />
                                                            <div class="row fontStyle text-center">
                                                                <div class="col-xl-5">
                                                                    <p>Price</p>
                                                                    <p>Mileage</p>
                                                                    <p>FuelType</p>

                                                                </div>
                                                                <div class="col-xl-7">
                                                                    <p>{car.Price} Lakhs</p>
                                                                    <p>{car.Mileage}</p>
                                                                    <p>{car.FuelType}</p>
                                                                </div>
                                                            </div>
                                                            <hr />

                                                            <Link to="/cars/car"> <button className="btn btn-primary mt-1 shadow d-flex mx-auto" onClick={() => handleThirdPage(i)} >ViewDetails</button></Link>

                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        }))
                            }

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SecondPage;