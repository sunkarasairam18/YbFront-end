import React, { Component } from 'react';
import '../css/navbar.css'


class NavBar extends Component {
    render() { 
        return (                        
        <nav  id="navbar_top" class="navbar navbar-expand-lg navbar-light bg-light" >
            <div class="container navtopb" id="mainnav">
            <a class="navbar-brand h1" href="/">
                <i class='bx bx-buildings bx-sm text-dark'></i>
                <span class="text-dark h3">YB</span> <span class="text-primary h3">Counsultants</span>
            </a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
               </button>
             <div class="collapse navbar-collapse" id="main_nav" >
               <ul class="navbar-nav">                  
                    <li class="nav-item dropdown navel " id="navelid">
                        <a class="nav-link " href="https://ybconsultancywebsite.herokuapp.com/Railway" data-bs-toggle="dropdown">  Our&nbsp;Services<i class="fa fa-angle-down"></i></a>                       
                        <ul class="dropdown-menu fade-up">
                        <li><a class="dropdown-item navdit navproper" href="https://ybconsultancywebsite.herokuapp.com/Railway"><i class="material-icons">train</i> Railway</a></li>                           
                        <li><a class="dropdown-item navdit navproper" href="https://ybconsultancywebsite.herokuapp.com/min"><i class="material-icons">construction</i> Mining </a></li>
                        <li><a class="dropdown-item navdit navproper" href="https://ybconsultancywebsite.herokuapp.com/oil"><i class="material-icons" >local_gas_station</i>  Oil </a></li>    
                        <li><a class="dropdown-item navdit navproper" href="https://ybconsultancywebsite.herokuapp.com/defence"><i class="material-icons">security</i> Defence </a></li>
                        </ul>
                    </li>
                   <li class="nav-item dropdown navel " >
                        <a class="nav-link " href="/carrier" data-bs-toggle="dropdown">Carrier<i class="fa fa-angle-down"></i></a>                       
                        <ul class="dropdown-menu fade-up">
                            <li><a class="dropdown-item navdit" href="/carrier">Carrier's At Yb</a></li>                           
                            <li><a class="dropdown-item navdit" href="/interview">Interview With Us</a></li>                    
                            <li><a class="dropdown-item navdit" href="/resume">Submit Resume</a></li>                    
                        </ul>
                    </li>
                   <li class="nav-item navel "><a href="/aboutus" className="nav-link">About Us</a></li>                           
               </ul>       
               <ul class="navbar-nav ms-auto">
                    <li>
                        <a href="/contactus" className="btn navel navconbtn">Contact Us</a>
                    </li>
               </ul>        
             </div> 
            </div> 
            
        </nav>    
        );
    }
}
 
export default NavBar;