import React, { Component } from 'react';
import Head from '../components/head';
import Bhead from '../components/bhead';
import Overview from '../components/overview';
import Para from '../components/para';
import Template from '../components/template';
import TempPhone from '../components/templatephone';
import Internship from '../components/internship';
import AboResume from '../components/aboveresume';
import ResumeTemp from '../components/resumetemp';


class Carrier extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <Head/>
                <Overview/>                
                <Bhead/>                
                <Para/>                
                <Template/>                
                <TempPhone/>                                
                <Internship/>
                <AboResume/>
                <ResumeTemp/>
            </React.Fragment>            
        );
    }
}
 
export default Carrier;