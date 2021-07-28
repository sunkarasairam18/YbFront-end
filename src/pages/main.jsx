import React, { Component } from 'react';

class MainPage extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div class="banner-wrapper bg-light">
                    <div id="index_banner" class="banner-vertical-center-index container-fluid pt-5">     
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                            </ol>
                        <div class="carousel-inner">
                        <div class="carousel-item active">

                        <div class="py-5 row d-flex align-items-center">
                            <div class="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                <h1 class="banner-heading h1 text-secondary display-3 mb-0 pb-5 mx-0 px-0 light-300 typo-space-line">
                                    Develop <strong>Strategies</strong> for <br/> your business
                                    
                                </h1>
                                
                                <p class="banner-body text-muted py-3 mx-0 px-0">
                                    With a rapidly changing world, there is a need for people and organizations to continue reinventing themselves. Finding new ways to disrupt the status quo is the only way to gain a competitive advantage - as individuals and organizations. The best leaders lean in and embrace change.
                                </p>
                                <a class="banner-button btn rounded-pill btn-outline-primary btn-lg px-4" href="/aboutus" role="button">Get Started</a>
                            </div>
                        </div>

                    </div>
                    <div class="carousel-item">

                        <div class="py-5 row d-flex align-items-center">
                            <div class="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                <h1 class="banner-heading h1 text-secondary display-3 mb-0 pb-3 mx-0 px-0 light-300">
                                    For those who live for their passion
                                </h1>
                                <p class="banner-body text-muted py-3">
                                    Our “Dedicated Resource” have special relevance for business owners who want committed experts employed from Neural to do their work.
                                </p>
                                <a class="banner-button btn rounded-pill btn-outline-primary btn-lg px-4" href="/aboutus" role="button">Get Started</a>
                            </div>
                        </div>

                    </div>
                    <div class="carousel-item">

                        <div class="py-5 row d-flex align-items-center">
                            <div class="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                <h1 class="banner-heading h1 text-secondary display-3 mb-0 pb-3 mx-0 px-0 light-300">
                                    The Right choice for Success.
                                </h1>
                                <p class="banner-body text-muted py-3">
                                    To empower great companies to help their employees thrive consistently, so that they can do their life’s best work, creating a virtuous circle of premium brand, profit and impact.
                                </p>
                                <a class="banner-button btn rounded-pill btn-outline-primary btn-lg px-4" href="/aboutus" role="button">Get Started</a>
                            </div>
                        </div>

                    </div>
                </div>
                <a class="carousel-control-prev text-decoration-none" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <i class='bx bx-chevron-left'></i>
                    <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next text-decoration-none" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <i class='bx bx-chevron-right'></i>
                    <span class="visually-hidden">Next</span>
                </a>
            </div>
            </div>
            </div>
            <section class="service-wrapper py-3">
        <div class="container-fluid pb-3">
            <div class="row">
                <h2 class="h2 text-center col-12 py-5 semi-bold-600">Services</h2>
                <div class="service-header col-2 col-lg-3 text-end light-300">
                    <i class='bx bx-gift h3 mt-1'></i>
                </div>
                <div class="service-heading col-10 col-lg-9 text-start float-end light-300">
                    <h2 class="h3 pb-4 typo-space-line">Make Success for future</h2>
                </div>
            </div>
            <p class="service-footer col-10 offset-2 col-lg-9 offset-lg-3 text-start pb-3 text-muted px-2">
                Our focus is always to deliver best & unique services. This approach has made YB counsulatnts a leading Counsultants company and one-stop service provider for clients throughout the world.
            </p>
        </div>
    </section>
    <section class="container overflow-hidden py-5">
        <div class="row gx-5 gx-sm-3 gx-lg-5 gy-lg-5 gy-3 pb-3 projects">
            <div class="col-xl-3 col-md-4 col-sm-6 project ui branding">
                <a href="#" class="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img class="service card-img" src="./assets/img/services-01.jpg" alt="Card"/>
                    <div class="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div class="service-work-content text-left text-light">
                            <span class="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Business</span>
                            <p class="card-text">Short takes from our experts on the Bussiness Sector</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 project ui graphic">
                <a href="#" class="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img class="card-img" src="./assets/img/services-02.jpg" alt="Card"/>
                    <div class="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div class="service-work-content text-left text-light">
                            <a href="https://ybconsultancywebsite.herokuapp.com/Railway" class="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Railways</a>
                            <p class="card-text">Short takes from our experts on the Railway industry</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 project branding">
                <a href="#" class="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img class="card-img" src="./assets/img/services-03.jpg" alt="Card"/>
                    <div class="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div class="service-work-content text-left text-light">
                            <span class="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Shipping</span>
                            <p class="card-text">Short takes from our experts on the Shipping industry</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 project ui graphic">
                <a href="#" class="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img class="card-img" src="./assets/img/services-04.jpg" alt="Card"/>
                    <div class="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div class="service-work-content text-left text-light">
                            <a href="https://ybconsultancywebsite.herokuapp.com/oil" class="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Oil</a>
                            <p class="card-text">Short takes from our experts on the oil industry</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 project ui graphic">
                <a href="#" class="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img class="card-img" src="./assets/img/services-05.jpg" alt="Card"/>
                    <div class="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div class="service-work-content text-left text-light">
                            <a href="https://ybconsultancywebsite.herokuapp.com/min" class="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Mining</a>
                            <p class="card-text">Short takes from our experts on the Mining industry</p>
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-xl-3 col-md-4 col-sm-6 project ui graphic branding">
                <a href="#" class="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img class="card-img" src="./assets/img/services-08.jpg" alt="Card"/>
                    <div class="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div class="service-work-content text-left text-light">
                            <a href="https://ybconsultancywebsite.herokuapp.com/defence" class="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Defence</a>
                            <p class="card-text">Short takes from our experts on the Defence industry</p>
                        </div>
                    </div>
                </a>
            </div>
<div class="col-xl-3 col-md-4 col-sm-6 project ui graphic">
                <a href="#" class="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img class="card-img" src="./assets/img/services-07.jpg" alt="Card"/>
                    <div class="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div class="service-work-content text-left text-light">
                            <span class="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Constructions</span>
                            <p class="card-text">Short takes from our experts on the Construction industry</p>
                        </div>
                    </div>
                </a>
            </div>
<div class="col-xl-3 col-md-4 col-sm-6 project ui graphic">
                <a href="#" class="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img class="card-img" src="./assets/img/services-06.jpg" alt="Card"/>
                    <div class="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div class="service-work-content text-left text-light">
                            <span class="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">IT Services</span>
                            <p class="card-text">Short takes from our experts on the IT industry</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
    <section class="bg-secondary">
        <div class="container py-5">
            <div class="row d-flex justify-content-center text-center">
                <div class="col-lg-2 col-12 text-light align-items-center">
                    <i class='display-1 bx bxs-box bx-lg'></i>
                </div>
                <div class="col-lg-7 col-12 text-light pt-2">
                    <h3 class="h4 light-300">Great transformations successful</h3>
                    <p class="light-300">We assure the best quality service and product designing within the timelines given by the clients. We have delivered many projects in for Domestic as well as International clients. We support clients in identifying their exact requirements for both short term and long term challenges.</p>
                </div>
                <div class="col-lg-3 col-12 pt-4">
                    <a href="work.html" class="btn btn-primary rounded-pill btn-block shadow px-4 py-2">View Our Work</a>
                </div>
            </div>
        </div>
    </section>


    <section class="py-5 mb-5">
        <div class="container">
            <div class="recent-work-header row text-center pb-5">
                <h2 class="col-md-6 m-auto h2 semi-bold-600 py-5">Recent Works</h2>
            </div>
            <div class="row gy-5 g-lg-5 mb-4">

                <div class="col-md-4 mb-3">
                    <a href="#" class="recent-work card border-0 shadow-lg overflow-hidden">
                        <img class="recent-work-img card-img" src="./assets/img/recent-work-01.jpg" alt="Card"/>
                        <div class="recent-work-vertical card-img-overlay d-flex align-items-end">
                            <div class="recent-work-content text-start mb-3 ml-3 text-dark">
                                <h3 class="card-title light-300">Business</h3>
                                <p class="card-text">Ullamco laboris nisi ut aliquip ex</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 mb-3">
                    <a href="https://ybconsultancywebsite.herokuapp.com/Railway" class="recent-work card border-0 shadow-lg overflow-hidden">
                        <img class="recent-work-img card-img" src="./assets/img/recent-work-02.jpg" alt="Card"/>
                        <div class="recent-work-vertical card-img-overlay d-flex align-items-end">
                            <div class="recent-work-content text-start mb-3 ml-3 text-dark">
                                <h3 class="card-title light-300">Railways</h3>
                                <p class="card-text">Psum officia anim id est laborum.</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 mb-3">
                    <a href="https://ybconsultancywebsite.herokuapp.com/min" class="recent-work card border-0 shadow-lg overflow-hidden">
                        <img class="recent-work-img card-img" src="./assets/img/recent-work-03.jpg" alt="Card"/>
                        <div class="recent-work-vertical card-img-overlay d-flex align-items-end">
                            <div class="recent-work-content text-start mb-3 ml-3 text-dark">
                                <h3 class="card-title light-300">Mining</h3>
                                <p class="card-text">Sum dolor sit consencutur</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 mb-3">
                    <a href="https://ybconsultancywebsite.herokuapp.com/oil" class="recent-work card border-0 shadow-lg overflow-hidden">
                        <img class="recent-work-img card-img" src="./assets/img/recent-work-04.jpg" alt="Card"/>
                        <div class="recent-work-vertical card-img-overlay d-flex align-items-end">
                            <div class="recent-work-content text-start mb-3 ml-3 text-dark">
                                <h3 class="card-title light-300">Oil</h3>
                                <p class="card-text">Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 mb-3">
                    <a href="https://ybconsultancywebsite.herokuapp.com/defence" class="recent-work card border-0 shadow-lg overflow-hidden">
                        <img class="recent-work-img card-img" src="./assets/img/recent-work-05.jpg" alt="Card"/>
                        <div class="recent-work-vertical card-img-overlay d-flex align-items-end">
                            <div class="recent-work-content text-start mb-3 ml-3 text-dark">
                                <h3 class="card-title light-300">Defence</h3>
                                <p class="card-text">Put enim ad minim veniam</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 mb-3">
                    <a href="#" class="recent-work card border-0 shadow-lg overflow-hidden">
                        <img class="recent-work-img card-img" src="./assets/img/recent-work-06.jpg" alt="Card"/>
                        <div class="recent-work-vertical card-img-overlay d-flex align-items-end">
                            <div class="recent-work-content text-start mb-3 ml-3 text-dark">
                                <h3 class="card-title light-300">Shipping</h3>
                                <p class="card-text">Mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>         
            </React.Fragment>
        );
    }
}
 
export default MainPage;