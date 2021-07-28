import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return (
            <footer class="bg-secondary pt-4">
                <div class="container">
                    <div class="row py-4">

                        <div class="col-lg-3 col-12 align-left">
                            <a class="navbar-brand" href="index.html">
                            <i class='bx bx-buildings bx-sm text-light'></i>
                                <span class="text-light h5">YB</span> <span class="text-light h5 semi-bold-600">Counsultants</span>
                            </a>
                            <p class="text-light my-lg-4 my-2">
                                For those who live for paasion and fullfill them by any extents.
                            </p>
                            <ul class="list-inline footer-icons light-300">
                                <li class="list-inline-item m-0">
                                    <a class="text-light" target="_blank" href="http://facebook.com/" rel="noreferrer"> 
                                        <i class='bx bxl-facebook-square bx-md'></i>
                                    </a>
                                </li>
                                <li class="list-inline-item m-0">
                                    <a class="text-light" target="_blank" href="https://www.linkedin.com/" rel="noreferrer">
                                        <i class='bx bxl-linkedin-square bx-md'></i>
                                    </a>
                                </li>
                                <li class="list-inline-item m-0">
                                    <a class="text-light" target="_blank" href="https://www.whatsapp.com/" rel="noreferrer">
                                        <i class='bx bxl-whatsapp-square bx-md'></i>
                                    </a>
                                </li>
                                <li class="list-inline-item m-0">
                                    <a class="text-light" target="_blank" href="https://www.medium.com/" rel="noreferrer">
                                        <i class='bx bxl-medium-square bx-md' ></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-4 my-sm-0 mt-4">
                            <h3 class="h4 pb-lg-3 text-light light-300">Our Company</h3>
                                <ul class="list-unstyled text-light light-300">
                                    <li class="pb-2">
                                        <i class='bx-fw bx bxs-chevron-right bx-xs'></i><a class="text-decoration-none text-light" href="/" >Home</a>
                                    </li>
                                    <li class="pb-2">
                                        <i class='bx-fw bx bxs-chevron-right bx-xs'></i><a class="text-decoration-none text-light py-1" href="/carrier">Carrier</a>
                                    </li>
                                    <li class="pb-2">
                                        <i class='bx-fw bx bxs-chevron-right bx-xs'></i><a class="text-decoration-none text-light py-1" href="/aboutus">About Us</a>
                                    </li>                                    
                                    <li class="pb-2">
                                        <i class='bx-fw bx bxs-chevron-right bx-xs'></i><a class="text-decoration-none text-light py-1" href="/contactus">Contact</a>
                                    </li>
                                </ul>
                        </div>

                        <div class="col-lg-3 col-md-4 my-sm-0 mt-4">
                            <h2 class="h4 pb-lg-3 text-light light-300">Our Services</h2>
                            <ul class="list-unstyled text-light light-300">
                                
                                <li class="pb-2">
                                    <i class='bx-fw bx bxs-chevron-right bx-xs'></i><a class="text-decoration-none text-light py-1" href="https://ybconsultancywebsite.herokuapp.com/Railway">Railway</a>
                                </li>
                                <li class="pb-2">
                                    <i class='bx-fw bx bxs-chevron-right bx-xs'></i><a class="text-decoration-none text-light py-1" href="https://ybconsultancywebsite.herokuapp.com/min">Mining</a>
                                </li>
                                <li class="pb-2">
                                    <i class='bx-fw bx bxs-chevron-right bx-xs'></i><a class="text-decoration-none text-light py-1" href="https://ybconsultancywebsite.herokuapp.com/oil">Oil</a>
                                </li>
                                <li class="pb-2">
                                    <i class='bx-fw bx bxs-chevron-right bx-xs'></i><a class="text-decoration-none text-light py-1" href="https://ybconsultancywebsite.herokuapp.com/defence">Defence</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-4 my-sm-0 mt-4">
                            <h2 class="h4 pb-lg-3 text-light light-300">For Client</h2>
                            <ul class="list-unstyled text-light light-300">
                                <li class="pb-2">
                                    <i class='bx-fw bx bx-phone bx-xs'></i>
                                    <a class="text-decoration-none text-light py-1" href="tel:+21 89945 76543">+21 89945 76543</a>
                                </li>
                                <li class="pb-2">
                                    <i class='bx-fw bx bx-mail-send bx-xs'></i><a class="text-decoration-none text-light py-1" href="motivationstudents2013@gmail.com">motivationstudents2013@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="w-100 bg-primary py-3">
                    <div class="container">
                        <div class="row pt-2">
                            <div class="col-lg-6 col-sm-12">
                                <p class="text-lg-start text-center text-light light-300">
                                    © Copyright 2021 YB Counsultants. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        );
    }
}
 
export default Footer;