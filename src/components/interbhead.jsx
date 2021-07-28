import React, { Component } from 'react';
import '../css/interbhead.css'
class InterBhead extends Component {
    render() { 
        return (  
            <div className="container-fluid">
                <div className="container">
                    <div id="interbheadtitle" className="text-center">
                        HIRING&nbsp;PROCESS OVERVIEW
                    </div>
                    <div id="interbheadsubtitle" className="text-center">
                        Don’t see a position that lines up with your experience? Contact us at recruiting@Ybconsulting.com.
                    </div>
                </div>
            </div>
        );
    }
}
 
export default InterBhead;