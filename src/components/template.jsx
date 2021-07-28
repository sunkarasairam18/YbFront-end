import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../css/template.css'

class Template extends Component {
  state = { 
    one : false,
    two : false,
    three: false,
    four: false,
    oneshow : false,
    twoshow : false,
    threeshow : false,
    fourshow : false
  }
  onechange = () =>{
    if(!this.oneshow) this.setState({one:!this.state.one});
  }
  twochange = () =>{
    this.setState({two:!this.state.two});
  }
  threechange = () =>{
    this.setState({three:!this.state.three});
  }
  fourchange = () =>{
    this.setState({four:!this.state.four});
  } 
  render() {     
    return (
      <React.Fragment>        
        <div className="modal fade" id="onemodal" tabindex="-1" aria-labelledby="onemodalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title" id="onemodalLabel">John Michael</h1>                                               
                <button type="button" className="btn-close" onClick={this.onechange} data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                I chose to join Yb because I was looking for a role that would provide me with new challenges and opportunities. Having over 15 years of work experience, over half of that in management consulting, I knew that my next career move had to be one that would really take my skills and capabilities to the next level. I needed to be part of an organization that would make full use of everything that I have learned over my career and then push me to grow even more.
                I found what I was looking for with Yb Group. The people that I work with are top-notch, from many different backgrounds, and I learn something new every day. I work on many different types of engagements with clients from a variety of industries, which has led me to become a very well-rounded professional. I can’t think of a better place to be than at Yb.              
              </div>       
            </div>
          </div>
        </div>
        <div className="modal fade" id="twomodal" tabindex="-1" aria-labelledby="twomodalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title" id="twomodalLabel">Work/Life Balance</h1>                                               
                <button type="button" className="btn-close" onClick={this.twochange} data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Our headquarters are located at the crossroads of the West, and we take full advantage of the active, healthy lifestyle our locations provide. It’s true that as consultants, we’re expected to work harder and faster than traditional business verticals, but what makes Yb unique is the flexibility and opportunity to enjoy life outside of the work setting. We also believe that home life is critical to work success and it isn’t uncommon to have family related events at Yb in addition to non-family events such as casino nights and regular happy hours.
              </div>       
            </div>
          </div>
        </div>
        <div className="modal fade" id="threemodal" tabindex="-1" aria-labelledby="threemodalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title" id="threemodalLabel">YB Way</h1>                                               
                <button type="button" className="btn-close" onClick={this.threechange} data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              Yb Way is what makes working at Yb Group completely different than any other consulting firm. Expectations are clear, and the impact on your professional life is long-lasting.<br/>
              <br/>There are four pillars to Yb Way: <br/>
              <ul>
                <li>Productivity</li>
                <li>Impact</li>
                <li>Contribution</li>
                <li>Responsibility</li>
              </ul>
              <br/>              
                Each pillar has three principles and a unique mission. Our purpose focuses on helping people create and continuously deliver extraordinary results, and that starts with each Yb employee. Yb Way is our guiding light and we know the positive impact it has on supporting our people and our clients.              
              </div>       
            </div>
          </div>
        </div>
        <div className="modal fade" id="fourmodal" tabindex="-1" aria-labelledby="fourmodalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title" id="fourmodalLabel">Growth Oppurtunity</h1>                                               
                  <button type="button" className="btn-close" onClick={this.fourchange} data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                As a Yb consultant, you will have access to a wide range of tools, resources, and opportunities that will enable a rich and fulfilling career.
                <br/>
                <br/>
                <h3>Mentorship</h3>
                <ul>
                  <li>
                  Monthly breakfasts/lunches with your mentor to work on professional and personal goals and development
                  Mentor junior team members.
                  </li>
                </ul>
                
                <h3>Community Impact</h3>
                <ul>
                  <li>
                  Regular community service opportunities, including building homes for refugees, foot races, and serving at a local soup kitchen.
                  </li>
                </ul>
                <h3>Continuing Ecucation</h3>
                <ul>
                  <li>
                  Weekly FORVM and leadership training sessions                  
                  </li>
                  <li>
                  Professional development and continuing education library                  
                  </li>
                  <li>
                  Tuition reimbursement                  
                  </li>
                  <li>Unlimited Coursera subscription</li>
                </ul>              
                <h3>Internal Ownership</h3>
                <ul>
                  <li>
                  Internal committees, teams, and initiatives, including Yb Women, Diversity and Inclusion, Team-Building Committee
                  Freedom to take initiative over passion projects
                  Participation at all stages of the sales and client                  
                  </li>
                </ul>      
                
              </div>       
            </div>
          </div>
        </div>
        <div className="container-fluid z" id="mainobj">
          <div className="container-fluid z fl">
            <CSSTransition in={true} timeout={2000} classNames="testone" onMouseEnter={this.onechange} onMouseLeave={this.onechange}>
              <div className="testcd" id="cdone">
                <CSSTransition in={this.state.one} timeout={1000} classNames="testoneh">
                  <div className="testcdh">
                    Why I Choose Yb
                  </div>
                </CSSTransition>                       
                  <div className="testcdc" >
                    “I chose to join Yb because I was looking for a role that would provide me with new challenges and opportunities. Having over 15 years of work experience, over half of that in consulting firm, I knew that my next career move had to be one that would really take my skills and capabilities to the next level. “
                  </div>         
                  <a href="#" className="testb" onClick={this.onechange} data-bs-toggle="modal" data-bs-target="#onemodal">Explore</a>                                  
              </div>                  
            </CSSTransition>        
            <CSSTransition in={true} timeout={2000} classNames="testone" onMouseEnter={this.twochange} onMouseLeave={this.twochange}>
              <div className="testcd" id="cdtwo" >
                <CSSTransition in={this.state.two} timeout={1000} classNames="testoneh">
                  <div className="testcdh">
                    Work/Life Balance
                  </div>
                </CSSTransition>                       
                  <div className="testcdc">
                    Quality of life is at the heart of YB Group’s operating principles. We work hard and play hard. Many employees at YB engage in extracurricular activities, and when it comes to events, YB provides a number of opportunities to engage.
                  </div>         
                  <a href="#" className="testb" onClick={this.twochange} data-bs-toggle="modal" data-bs-target="#twomodal">Explore</a>                                  
              </div>                  
            </CSSTransition>     
            <CSSTransition in={true} timeout={2000} classNames="testone" onMouseEnter={this.threechange} onMouseLeave={this.threechange}>
              <div className="testcd" id="cdthree">
                <CSSTransition in={this.state.three} timeout={1000} classNames="testoneh">
                  <div className="testcdh">
                    YB Way
                  </div>
                </CSSTransition>                       
                  <div className="testcdc">
                    You will have the opportunity to learn about the YB Way – the values that guide our organization – and apply the principles to your work and life. By focusing on the four YB Way pillars, we can help people create and deliver extraordinary results.
                  </div>         
                  <a href="#" className="testb" onClick={this.threechange} data-bs-toggle="modal" data-bs-target="#threemodal">Explore</a>                                  
                           
                  </div>                  
            </CSSTransition> 
            <CSSTransition in={true} timeout={2000} classNames="testone" onMouseEnter={this.fourchange} onMouseLeave={this.fourchange}>
              <div className="testcd"  id="cdfour">
                <CSSTransition in={this.state.four} timeout={1000} classNames="testoneh">
                  <div className="testcdh">
                    Growth Oppurtunity
                  </div>
                </CSSTransition>                       
                  <div className="testcdc">
                    We believe in seeing our people succeed and grow. One advantage of working at a fast-growing firm is the amount of room to move around and try a number of specialties and offerings. 
                    In addition to consulting, we also aid in government tenders,material fitment at shop floor and inspection.
                  </div>         
                  <a href="#" className="testb" onClick={this.fourchange} data-bs-toggle="modal" data-bs-target="#fourmodal">Explore</a>                                  
              </div>                  
            </CSSTransition> 
                                           
          </div>
        </div>
        
      </React.Fragment>
    );
  }
}
 
export default Template;