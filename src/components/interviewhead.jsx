import React, { Component } from 'react';
import '../css/head.css';
import '../css/interviewhead.css';

class InterHead extends Component {    
    render() { 
        return (
            <div className="container-fluid intermainhead" >        
                <div className="container">
                    <div className="rol" id="title">
                        <div className="col-md-12 ">
                            Join Yb
                        </div>
                    </div>    
                    <div className="rol" id="subtitle">
                        <div className="col-md-12">
                            Our goal is to be a valuable resource during your job search.<br className="nxtl"/>
                            Find answers to frequently asked questions by previous applicants.<br className="nxtl"/>
                            Have a question that isn’t on this list? Don’t hesitate to contact us directly.
                        </div>
                    </div>                         
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <a className="btn" type="button" href="/contactus" id="btns">Contact Us</a>
                    </div>
                     <div className="rol">
                        <div className="col-md-12">
                            <a className="btn" href="/contactus" type="button" id="btnb">Contact Us</a>
                        </div>
                    </div>
                </div>      
            </div>
        );
    }
}
 
export default InterHead;