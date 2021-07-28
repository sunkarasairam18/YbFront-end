import React, { Component } from 'react';
import '../css/contactus.css';

class ContactUs extends Component {
    render() { 
        return (
<section class="contactt">
        <div class="contentt">
            <h2>Contact Us</h2>
            <p>Get in touch with our experienced and friendly team.We are who answer the phone. Give us a call, and let’s talk about building a website that solves your business needs</p>
        </div>
        <div class="containerr">
            <div class="contactinfoo">
                <div class="boxx">
                    <div class="iconn"><i class="material-icons" >room</i></div>
                    <div class="textt">
                        <h3>Address</h3>
                        <p>1234 beach Road,<br/>Bheemili beech,<br/>533445</p>
                    </div>
                </div>
                <div class="boxx">
                    <div class="iconn"><i class="material-icons" >phone</i></div>
                    <div class="textt">
                        <h3>Phone</h3>
                        <p>+21 89945 76543</p>
                    </div>
                </div>
                <div class="boxx">
                    <div class="iconn"><i class="material-icons" >mail</i></div>
                    <div class="textt">
                        <h3>Email</h3>
                        <p>motivationstudents2013@gmail.com</p>
                    </div>
                </div>
                

            </div>
            <div class="formm">
                <formm>
                    <h2>Send Message</h2>
                    <div class="inputboxx">
                        <input type="textt" name="" required="required"/>
                        <span>Full Name</span>
                    </div>
                    <div class="inputboxx">
                        <input type="text" name="" required="required"/>
                        <span>Email</span>
                    </div>
                    <div class="inputboxx">
                        <textarea required="required"></textarea>
                        <span>Type your Message...</span>
                    </div>
                    <div class="inputboxx">
                        <input type="submit" name="" value="Send"/>
            
                    </div>
                </formm>
            </div>
        </div>

    </section>
        );
    }
}
 
export default ContactUs;