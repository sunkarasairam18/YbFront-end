import React, { Component } from 'react';
import Resume from './resume';
import '../css/resumetemp.css';

class ResumeTemp extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <div className="container-fluid no " id="resumetempbox">
                <div className="container-fluid " id="submithead">                   
                    <h1 className="text-center subresumehead">Submit Resume</h1>                                        
                </div>
                <div className="container-fluid ">
                    <div className="container abobox hideresumetemp" >
                        <h1 className="abotitle">Yb Group</h1>
                        <h3>Growth Guaranted</h3>
                        <div className="abotext">
                            From the day you join Yb, you will work on the most challenging strategic problems, have real impact at clients, and be mentored by global professionals at the top of their game.                        
                        </div>
                    </div>
                    <div className="container hideresumetemp"><Resume/></div>                                                                 
                </div>
                <div className="visiresumetemp">
                    <div className="row">
                        <div className="col-md-6">
                            <div id="templeft">
                                <h1 id="templefth">Yb Group</h1>
                                <h3 id="templeftsub">Growth Guaranted</h3>
                                <div id="templeftcon"> 
                                    From the day you join Yb, you will work on the most challenging strategic problems, have real impact at clients, and be mentored by global professionals at the top of their game.
                                </div>                                    
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="adjust"><Resume/></div>   
                        </div> 
                    </div>
                </div>                                            
            </div>
            </React.Fragment>
         );
    }
}
 
export default ResumeTemp;

