import React, { useContext } from 'react';
import { MyContext } from '../contextData/MyContext';
import { Link } from 'react-router-dom';
import "../App.css"


function FourthPage() {
    const { state: { bookingDetailsOnSubmit: data, bookedCar: car } } = useContext(MyContext)
    return (
        <div className="bg-fourth-page">
            <h4 className="text-white d-flex justify-content-center">Thanks for choosing "LEO MOTORS"</h4>
            <h5 className="text-white d-flex justify-content-center mt-5">You Booked : "{car.carName}"</h5>
            <div class="d-flex align-items-center justify-content-center" style={{ height: "500px" }}>

                <div class="card " style={{ width: "20rem" }}>
                    <div class="card-body">
                        <h5 class="card-title">Details</h5>
                        <p class="card-text">Name:{data.name}</p>
                        <p class="card-text">Mobile Number:{data.mobileNumber}</p>
                        <p class="card-text">Email-id:{data.emailId}</p>
                        <div>
                            <Link to="/"> <a class="btn btn-primary d-flex  mx-auto">Go To Home</a></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FourthPage
