import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import MainPage from './CarTraderApp/MainPage';
import SecondPage from './CarTraderApp/SecondPage';
import NavBar from './CarTraderApp/NavBar';
import Footer from './CarTraderApp/Footer';
import ThirdPage from './CarTraderApp/ThirdPage';
import FourthPage from './CarTraderApp/FourthPage';

function App() {


  return (
    <>

      <Router>
        <NavBar></NavBar>


        <Route path="/" exact component={MainPage}></Route>
        <Route path="/cars" exact component={SecondPage}></Route>
        <Route path="/cars/car" exact component={ThirdPage}></Route>
        <Route path="/cars/car/bookingpage" exact component={FourthPage}></Route>


      </Router>
      <Footer></Footer>

    </>

  );
}

export default App;
