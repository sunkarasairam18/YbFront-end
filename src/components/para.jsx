import React, { Component } from 'react';
import '../css/para.css';

class Para extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <div className="container-fluid content">
                    <div className="container">
                        <hr/>
                        <div className="boxpara">
                            <h1 className="parah">Diversity</h1>
                            <div className="parat">
                                An increasing number of women are having an impact, from boardrooms and C-suites to the vast seas of cubicles in between—and companies worldwide are benefiting. 
                                Our organization defines gender balance as “an equitable distribution of life’s opportunities and resources between women and men.” We call this gender parity.
                            </div>
                        </div>
                        <hr/>
                        <div className="boxpara">
                            <h1 className="parah">Leadership</h1>
                            <div className="parat">                            
                                Achieving breakthrough performance requires casting off old paradigms. At Yb, it begins with the firm’s ownership and management, which are both predominantly female. Yb believes that diversity and equality—along with passion, integrity and dedication—are the foundations of organizational success.
                            </div>
                        </div>
                        <hr/>
                        <div className="boxpara">
                            <h1 className="parah">At YB Consultant</h1>
                            <div className="parat">
                                At Yb, we invite you to bring your full, authentic self to work. Enjoy working alongside diverse and down-to-earth colleagues who do serious work, but don’t take themselves too seriously.
                            </div>                            
                        </div>
                        <hr/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Para;