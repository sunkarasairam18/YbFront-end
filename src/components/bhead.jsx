import React, { Component } from 'react';
import '../css/bhead.css';

class Bhead extends Component {    
    render() { 
        return (
            <div className="container-fluid content">
                <div className="container">               
                <div class="row row-cols-1 row-cols-md-3 g-4 r">
                    <div class="col">
                        <div class="card h-100 shadow-lg p-3 bg-body rounded">
                            <div className="first">
                            </div>
                            <div class="card-body">
                                <h3 class="card-title title">Life At Yb</h3>
                                <p class="card-text text">At Yb, every beginner is guided and nurtured in the best way by experienced team members to be raised not as an ordinary employee, but as an extraordinary professional. Yb India fosters a people centric culture that empowers its employees, encourages new ideas and rewards hard work an innovation. While this culture benefits them in gaining expertise and experience, it also helps them earn handsome incentives.</p>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div class="col">
                        <div class="card h-100 shadow-lg p-3 bg-body rounded">    
                            <div className="second hi">
                            </div>                    
                            <div class="card-body">
                                <h3 class="card-title title">Why Yb</h3>
                                <p class="card-text text">At Yb Consulting, you will be part of a collaborative global team of exceptional peers whose work has a transformational impact on the lives of millions around the world. You’ll assume roles with increasing levels of challenge, responsibility and exposure that provide world-class career progression opportunities.</p>
                            </div>
                            <div className="second vi">
                            </div>  
                        </div>
                        
                    </div>
                    <div class="col">
                        <div class="card h-100 shadow-lg p-3 bg-body rounded">
                            <div className="three">
                            </div>  
                            <div class="card-body">
                                <h3 class="card-title title">The Yb Career</h3>
                                <p class="card-text text">From training and professional development to hands-on casework, Yb is committed to investing in you at every stage of your career and offering the fastest, most direct route to broad and comprehensive business skills.
You’ll find that frequent and diverse casework means more opportunities to learn. Our training programs and the mentoring we offer to our consulting staff create a springboard to a long and rewarding career.</p>
                            </div>
                            </div>                        
                        </div>
                
                    </div>

                </div>
                
            </div>
        );
    }
}
 
export default Bhead;