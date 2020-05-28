import React from 'react'

const Carousal = () => {
    return (
        <>

            <div id="carouselExampleIndicators" class="carousel slide col-sm-10 m-auto border p-1" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">

                        <img src="https://www.pixel4k.com/wp-content/uploads/2018/12/lamborghini-huracan-veneno-gran-turismo-4k_1545589371.jpg" class="d-block w-100" height="450px" alt="...1" />
                        <div class="carousel-caption d-none d-md-block">
                            <h4 class="font">Lanborghini</h4>
                            <p>IT ALL STARTS WITH A DREAM. WORK IN SILENCE, LET YOUR LANBORGHINI MAKETHE NOISE.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.pixel4k.com/wp-content/uploads/2020/01/lamborghini-aventador-s-roadster-2020_1579649279-2048x1152.jpg" height="450px" class="d-block w-100" alt="...2" />
                        <div class="carousel-caption d-none d-md-block">
                            <h4 class="font">B.M.W</h4>
                            <p>IT ALL STARTS WITH A DREAM. WORK IN SILENCE, LET YOUR B.M.W MAKETHE NOISE.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.pixel4k.com/wp-content/uploads/2018/12/lamborghini-veneno-gran-turismo-sport-4k_1545589262.jpg" height="450px" class="d-block w-100" alt="...3" />
                        <div class="carousel-caption d-none d-md-block">
                            <h4 class="font">FORD</h4>
                            <p>IT ALL STARTS WITH A DREAM. WORK IN SILENCE, LET YOUR FORD MAKETHE NOISE.</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}

export default Carousal
