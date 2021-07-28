import React, { Component } from 'react';
import '../css/interguide.css';

class InterGuide extends Component {
    render() { 
        return (
            <div className="container-fluid interguiderow">
                <div className="container-fluid interguiderow">
                    <div className="text-center interguideh">
                        INTERVIEW GUIDELINES
                    </div>
                    <div className="row interguiderow">
                        <div className="col-md-4 text-center interguidecd">
                            <div>
                                <i className='material-icons interguidei'>desktop_windows</i>
                                
                            </div>
                            <div className="interguidesubtitle">
                                Learn About Yb
                            </div>
                            <div className="interguidecon">
                                Check out our website and social media feeds to speak comfortably about Yb.
                            </div>
                        </div>
                        <div className="col-md-4 text-center interguidecd">
                            <div>
                                <i className='material-icons interguidei'>sensors</i>
                            </div>
                            <div className="interguidesubtitle">
                                Research your interviewer's
                            </div>
                            <div className="interguidecon">
                                Look on LinkedIn for common experiences, interests, or educational background and see if you have mutual connections.
                            </div>
                        </div>
                        <div className="col-md-4 text-center interguidecd">
                            <div>
                                <i className='material-icons interguidei'>question_answer</i>

                            </div>
                            <div className="interguidesubtitle">
                                Prepare answers

                            </div>
                            <div className="interguidecon">
                                Be ready to discuss in detail your career history, technical or functional expertise, industry knowledge, and educational background.
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-3 text-center interguidecd">
                            <div>
                                <i className="material-icons interguidei">groups</i>

                            </div>
                            <div className="interguidesubtitle">
                                Interview attire

                            </div>
                            <div className="interguidecon">
                                Yb welcomes and embraces a wide array of personalities, styles, and backgrounds. The most important aspect to consider when dressing for your interview is to find clothing and a style that makes you feel comfortable and represents who you are, while maintaining a level of professionalism.
                            </div>
                        </div>
                        <div className="col-md-3 text-center interguidecd">
                            <div>
                                <i class="material-icons interguidei">lightbulb</i>

                            </div>
                            <div className="interguidesubtitle">
                                Additional tips
                            </div>
                            <div className="interguidecon">
                                Natural hair and makeup are welcomed. Neutral clothing with a pop of color or pattern, that’s not too distracting, can be a good way to show your personality and professional brand.
                            </div>
                        </div>
                        <div className="col-md-3">                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default InterGuide;