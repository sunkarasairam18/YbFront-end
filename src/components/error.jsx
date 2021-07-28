import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/error.css'

class Error extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div>
                    <div className="errorh text-center">
                        Sorry 😕
                    </div>
                    <div className="errorsubh text-center">
                        The page you're looking for can't be found
                    </div>
                    <div className="errorsubmh text-center">
                        Try searching or visit our <span><Link to="/">homepage</Link></span>
                            
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Error;