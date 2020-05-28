import React from 'react';
import { Link } from 'react-router-dom';
import MainPage from './MainPage';
import '../App.css';

const NavBar = () => {
    return (

        <div>
            <nav className="navbar navbar-expand-md navcolor border-info ">
                <img className="NavImg mr-5" src="https://www.iconspng.com/images/prismatic-lion-10/prismatic-lion-10.jpg" width="150px" height="70px"></img>
                <Link to="/"><a className="navbar-brand font text-white" >LEO MOTORS</a></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="collapsibleNavbar">
                    <ul className="navbar-nav  ml-auto">
                        <li className="pad "></li>
                        <li className="nav-item mr-2">
                            <Link to="/"> <a className="nav-link text-white" href="#">Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <button type="button" class="btn  btn-link text-white" data-toggle="modal" data-target="#exampleModalLong">
                                About
                    </button>
                            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title font" id="exampleModalLongTitle">PEUGEOT MOTORS</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <h4>Discover and choose our models</h4>
                                            <p>
                                                From city cars to premium fastback saloons;
                                                SUVs or 8 seater vehicles….there’s a PEUGEOT to suit your lifestyle.
                                                Our range of vehicles feature the latest in-car technology and improved
                                                fuel efficiency through award-winning petrol, intelligent diesel,
                                                full electric and plug-in HYBRID powertrains….and each one delivers
                                                that renowned PEUGEOT driving experience. And, when buy your new PEUGEOT
                                                online we can deliver it free of charge direct to your home or via our
                                                new click and collect option*, safely and in full accordance with the UK
                                                Government’s defined social distancing and COVID-19 guidelines and protocols.
                                        Please contact your local participating Retailer for further information.</p>
                                            <p>
                                                *restricted to participating retailers in England only.</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <button type="button" class="btn btn-link text-white" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Log-In</button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title font" id="exampleModalLabel">PEUGEOT MOTORS</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <form>
                                                <div class="form-group">
                                                    <label for="user-name" class="col-form-label">Username</label>
                                                    <input type="text" class="form-control" id="user-name"></input>
                                                </div>
                                                <div class="form-group">
                                                    <label for="pwd" class="col-form-label">Password</label>
                                                    <input type="password" class="form-control" id="pwd"></input>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-info">Log-in to Home page</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <button type="button" class="btn btn-link text-white" data-toggle="modal" data-target=".bd-example-modal-lg">Contact Us</button>
                            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title font ml-2" id="exampleModalLongTitle">PEUGEOT MOTORS</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <h5 class="ml-4">Coronavirus COVID-19 status update</h5>
                                        <p class="ml-4">Please note that whilst plans are underway to maintain
                                        the best service possible during the period of the Coronavirus COVID-19 threat,
          our Customer Care team was already in the process of being re-located.</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#"><i className="fas fa-search"></i></a>
                        </li> <li className="nav-item">
                            <a className="nav-link  text-white" href="#"><i className="fa fa-comments" aria-hidden="true"></i>  </a>
                        </li>
                    </ul>


                </div>
            </nav>

        </div >
    )
}

export default NavBar
