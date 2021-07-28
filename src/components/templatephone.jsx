import React, { Component } from 'react';
import '../css/templatephone.css'

class TempPhone extends Component {
  render() {     
    return (
      <React.Fragment>
        {/* Modals Start here */}
        <div class="modal fade" id="onetempphonemodal" tabindex="-1" aria-labelledby="onetempphonemodalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title" id="onetempphonemodalLabel">John Michael</h1>                                               
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                I chose to join Yb because I was looking for a role that would provide me with new challenges and opportunities. Having over 15 years of work experience, over half of that in management consulting, I knew that my next career move had to be one that would really take my skills and capabilities to the next level. I needed to be part of an organization that would make full use of everything that I have learned over my career and then push me to grow even more.
                I found what I was looking for with Yb Group. The people that I work with are top-notch, from many different backgrounds, and I learn something new every day. I work on many different types of engagements with clients from a variety of industries, which has led me to become a very well-rounded professional. I can’t think of a better place to be than at Yb.              
              </div>       
            </div>
          </div>
        </div>
        <div class="modal fade" id="twotempphonemodal" tabindex="-1" aria-labelledby="twotempphonemodalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title" id="twotempphonemodalLabel">Work/Life Balance</h1>                                               
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                Our headquarters are located at the crossroads of the West, and we take full advantage of the active, healthy lifestyle our locations provide. It’s true that as consultants, we’re expected to work harder and faster than traditional business verticals, but what makes Yb unique is the flexibility and opportunity to enjoy life outside of the work setting. We also believe that home life is critical to work success and it isn’t uncommon to have family related events at Yb in addition to non-family events such as casino nights and regular happy hours.
              </div>       
            </div>
          </div>
        </div>
        <div class="modal fade" id="threetempphonemodal" tabindex="-1" aria-labelledby="threetempphonemodalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title" id="threetempphonemodalLabel">YB Way</h1>                                               
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
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
        <div class="modal fade" id="fourtempphonemodal" tabindex="-1" aria-labelledby="fourtempphonemodalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title" id="fourtempphonemodalLabel">Growth Oppurtunity</h1>                                               
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
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
        {/* Modals End here */}
        {/* static cards from here */}
        <div className="container-fluid no" id="mainphoneobj">
          <div className="container-fluid no ">
            <div className="tempphonecd container-fluid" id="tempone">
              <div className="tempphonecdh">
                Why I Choose Yb
              </div>                           
              <div className="tempphonecdc" >
                “I chose to join Yb because I was looking for a role that would provide me with new challenges and opportunities. Having over 15 years of work experience, over half of that in management consulting, I knew that my next career move had to be one that would really take my skills and capabilities to the next level. “
              </div>         
              <a href="#" className="tempphoneb btn btn-primary" data-bs-toggle="modal" data-bs-target="#onetempphonemodal">Explore</a>                                  
            </div>   

            <div className="tempphonecd no" id="temptwo" >
              <div className="tempphonecdh">
                Work/Life Balance
              </div>
              <div className="tempphonecdc">
                Quality of life is at the heart of YB Group’s operating principles. We work hard and play hard. Many employees at YB engage in extracurricular activities, and when it comes to events, YB provides a number of opportunities to engage.
              </div>         
              <a href="#" className="tempphoneb btn btn-primary" data-bs-toggle="modal" data-bs-target="#twotempphonemodal">Explore</a>                                  
            </div>                  

            <div className="tempphonecd no" id="tempthree">
              <div className="tempphonecdh">
                YB Way
              </div>
             <div className="tempphonecdc">
                You will have the opportunity to learn about the YB Way – the values that guide our organization – and apply the principles to your work and life. By focusing on the four YB Way pillars, we can help people create and deliver extraordinary results.
              </div>         
              <a href="#" className="tempphoneb btn btn-primary" onClick={this.threechange} data-bs-toggle="modal" data-bs-target="#threetempphonemodal">Explore</a>                                  
            </div>        

            <div className="tempphonecd no"  id="tempfour">
              <div className="tempphonecdh">
                Growth Oppurtunity
              </div>
              <div className="tempphonecdc">
                We believe in seeing our people succeed and grow. One advantage of working at a fast-growing firm is the amount of room to move around and try a number of specialties and offerings. In addition to business consulting, we offer social sector practice areas including social impact, education and impact investing.
              </div>         
              <a href="#" className="tempphoneb btn btn-primary" onClick={this.fourchange} data-bs-toggle="modal" data-bs-target="#fourtempphonemodal">Explore</a>                                  
            </div>                  
                                           
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default TempPhone;