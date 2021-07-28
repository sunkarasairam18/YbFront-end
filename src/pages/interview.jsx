import React, { Component } from 'react';
import InterHead from '../components/interviewhead';
import InterBhead from '../components/interbhead';
import InterProcess from '../components/interprocess'
import InterGuide from '../components/interguide';
import Interstand from '../components/interstand';
import InterFaq from '../components/interfaq';

class Interview extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <InterHead/>
                <InterBhead/>
                <InterProcess/>
                <InterGuide/>
                <Interstand/>
                <InterFaq/>
            </React.Fragment>            
        );
    }
}
 
export default Interview;