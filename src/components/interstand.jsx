import React, { Component } from 'react';
import '../css/interstand.css'

class Interstand extends Component {
    render() { 
        return (
            <div className="container-fluid interstandm interstandmain">
                <div className="container-fluid interstandm">
                    <div className="interstandmainh text-center">
                        What we stand for
                    </div>
                    <div className="interstandmaincon text-center">
                        We know how to ensure organizations have the right talent with the right capabilities to ignite its business strategy—whether it’s growth and innovation, globalization, or transformation. We help our clients achieve superior performance by addressing the people and organizational requirements they need.
                    </div>
                    <div className="interstandminh text-center">
                        Our purpose
                    </div>
                    <div className="interstandminhcon text-center">
                        To enable people and organizations to exceed their potential
                    </div>
                    <div className="interstandminh text-center">
                        Our vision
                    </div>
                    <div className="interstandminhcon text-center">
                        To be the preeminent organizational consultancy
                    </div>
                    <div className="interstandminh text-center">
                        Our values
                    </div>
                </div>
                <div className="container interstandbmain">
                    <div className="row">                    
                    <div className="col-md-3">
                        <div className="interstandbmainh">
                            Inclusion
                            
                        </div>
                        <div className="interstandbmaincon">
                            We embrace people with different points of view, from all backgrounds. And we think and work as one team.
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="interstandbmainh">
                            Honesty
                        </div>
                        <div className="interstandbmaincon">
                            We say what we mean and do what we say. We hold ourselves to the highest standards. And we make it safe for people to speak out when they see something wrong.
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="interstandbmainh">
                            Knowledge
                        </div>
                        <div className="interstandbmaincon">
                            We are insatiably curious, always learning new things. And we actively help our colleagues grow and develop, too, with mentoring and support.
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="interstandbmainh">
                            Performance
                        </div>
                        <div className="interstandbmaincon">
                            We never settle for the status quo. We always strive to be better today than we were yesterday and do our best for our clients, colleagues, and shareholders.
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Interstand;