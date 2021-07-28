import React, { Component } from 'react';
import '../css/internship.css';

class Internship extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <div className="container-fluid intern" >        
                    <div className="container-fluid bl">
                        <div className="internhead text-center">Early Hiring Process</div>
                        <div className="row ">
                            <div className="col-md-4 cl" id="ino">
                                <h1 className="internsubhead text-center">
                                    Internships
                                </h1>
                                <p className="internpara text-center">
                                    The internship program is designed for students in their sophomore or junior year who are interested in gaining hands-on experience in consulting. Through the program, 
                                    you will interact with both YB experts and clients.Your internship cohort will be taught by YB experts, helping you gain first-hand understanding of a career in consulting from those living it every day.
                                </p>
                            </div>
                            <div className="col-md-4 cl" id="int">
                                <h1 className="internsubhead text-center">
                                    Associate Bootcamp
                                </h1>
                                <p className="internpara text-center">
                                This internship program is designed for people whose resume matchs the organization critriea and has minimum of experience working in the field. Stipend will be provided at the end of internship based on satisfactory work and project.Our expertise guide you at every single stage to create professional outcomes.
                                </p>
                            </div>
                            <div className="col-md-4 cl" id="inth">
                                <h1 className="internsubhead text-center">
                                    Paid internships
                                </h1>
                                <p className="internpara text-center">
                                This internship program is designed for students who are in final year of education or recent passed out batch with base knowledge and trying to explore deeper levels. We train you in live projects to have hands on experience.Your internship will be mentored and monitored through our professionals at every stage.
                                </p>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </React.Fragment>
    );
    }
}
 
export default Internship;