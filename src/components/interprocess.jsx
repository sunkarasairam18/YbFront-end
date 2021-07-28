import React, { Component } from 'react';
import '../css/interprocess.css'

class InterProcess extends Component {
    render() { 
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row tworow">
                            <div className="col-md-4">
                                <div class="interprocd text-center">
                                
                                    <div class="card-body">
                                        <h5 className="interprocdsubtitone">1</h5>
                                        <h5 className="interprocdsubtitle">Submit Application</h5>
                                        <p className="card-text">
                                            Your resume should be an honest reflection of your experience and capabilities. Show how you have been impactful in roles rather than a list of tasks. Share what your specific career goals are and what interests you about Yb.
                                        </p>
                                    </div>
                                
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className=" interprocd text-center">
                                    
                                    <div className="card-body">
                                        <h5 className="interprocdsubtitone">2</h5>
                                        <h5 className="interprocdsubtitle">Application Review</h5>
                                        <p className="card-text">
                                            Your resume will be reviewed by our team. If your background aligns with Yb’s needs, a recruiter will contact you directly. Due to volume, not every applicant will receive a personal response if they do not meet Yb’s expectations.
                                        </p>
                                    </div>
                                
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className=" interprocd text-center">
                                    
                                    <div className="card-body">
                                        <h5 className="interprocdsubtitone">3</h5>
                                        <h5 className="interprocdsubtitle">Recruiter Phone Screen</h5>
                                        <p className="card-text">
                                            If your experiences are a good fit for a current role, you will have an in-depth phone interview with a recruiter to learn more about your interests.
                                        </p>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                        <div className="row tworow">
                            <div className="col-md-4">
                                <div className=" interprocd text-center">
                                
                                    <div className="card-body">
                                        <h5 className="interprocdsubtitone">4</h5>
                                        <h5 className="interprocdsubtitle">Subject Matter Expert Interview</h5>
                                        <p className="card-text">
                                            Next in the process you will have an interview with a subject matter expert to assess your skills for the specific position.
                                        </p>
                                    </div>
                                
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className=" interprocd text-center">
                                    
                                    <div className="card-body">
                                        <h5 className="interprocdsubtitone">5</h5>

                                        <h5 className="interprocdsubtitle">Final Interview</h5>
                                        <p className="card-text">
                                            If your skills align, you will be invited for a final interview either at a Yb office or virtually to meet with several stewards and a partner.
                                        </p>
                                    </div>
                                
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="interprocd text-center">
                                    
                                    <div className="card-body">
                                        <h5 className="interprocdsubtitone">6</h5>

                                        <h5 className="interprocdsubtitle">Next Steps</h5>
                                        <p clasclassNames="card-text">
                                            A recruiter will reach out to you with next steps. If your skillset isn’t a fit for the current role, we invite you to stay connected on our careers site and social media.
                                        </p>
                                    </div>
                                
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default InterProcess;