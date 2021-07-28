import React, { Component } from 'react';
import '../css/head.css';

class Head extends Component {    
    render() { 
        return (
            <div class="container-fluid mainhead" >        
                <div class="container">
                    <div class="rol" id="title">
                        <div class="col-md-12 ">
                            Join Yb
                        </div>
                    </div>    
                    <div className="rol" id="subtitle">
                        <div className="col-md-12">
                            At YB, we drive success – for our clients, our people, and our firm.<br className="nxtl"/>
                            In Railways, Mining, Defense, Oil and shipping.<br className="nxtl"/>
                            We are glad to have you with us!
                        </div>
                    </div>                         
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <a className="btn" type="button" href="#resumetempbox" id="btns">Apply</a>
                    </div>
                    <div className="rol">
                        <div className="col-md-12">
                            <a className="btn" href="#resumetempbox" type="button" id="btnb">Apply</a>
                        </div>
                    </div>                    
                </div>      
            </div>
        );
    }
}
 
export default Head;