import React, { Component } from 'react';
import '../css/interfaq.css'

class InterFaq extends Component {
    render() { 
        return (
            <React.Fragment>
                <div className="container interfaq">
                <div className="container">
                    <div className="text-center interfaqh">
                        FREQUENTLY ASKED QUESTIONS
                    </div>
                    <div className="row interfaqrow">
                        <div className="col-md-4 text-center interfaqcd">
                            
                            <div className="interfaqsubtitle">
                                How do I get into the consulting industry?
                            </div>
                            <div className="interfaqcon">
                                Previous experience in Yb’s industries – life sciences, consumer products, or retail – is highly preferred for experienced candidates moving into consulting. A service-oriented mindset, adaptability, and willingness to travel are key criteria. Entry-level candidates can start consulting careers through our Internship, Associate Bootcamp, or Academy hiring programs.
                            </div>
                        </div>
                        <div className="col-md-4 text-center interfaqcd">
                            
                            <div className="interfaqsubtitle">
                                How much travel is involved in consulting roles? 
                            </div>
                            <div className="interfaqcon">
                                All consulting roles with Yb require 100% travel nationwide. Our goal is a 5-4-3 travel schedule: 5 days of work, 4 days onsite with our clients, and 3 nights away from home.
                            </div>
                        </div>
                        <div className="col-md-4 text-center interfaqcd">
                            
                            <div className="interfaqsubtitle">
                                Do I need to live near a Yb office?
                            </div>
                            <div className="interfaqcon">
                                Yb consultants live around the country, with easy access to a major airport. We do not require that stewards live near a Yb office but do believe you benefit from proximity to a local community of stewards.
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-3 text-center interfaqcd">
                            
                            <div className="interfaqsubtitle">
                                What is Yb's bench policy?
                            </div>
                            <div className="interfaqcon">
                                Stewards use time between engagements to: take vacation, develop skills, build RFPs or client demos, and contribute to internal projects. Yb invests in stewards for the long-term and has no specific time limit for being on the bench.
                            </div>
                        </div>
                        <div className="col-md-3 text-center interfaqcd">
                            
                            <div className="interfaqsubtitle">
                                How are expenses handled at Yb?
                            </div>
                            <div className="interfaqcon">
                                At Yb, expenses are paid based on actual expenses incurred. There is no standard per diem. Consultants are responsible for submitting expenses in a timely manner for reimbursement.
                            </div>
                        </div>
                        <div className="col-md-3">
                            
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}
 
export default InterFaq;