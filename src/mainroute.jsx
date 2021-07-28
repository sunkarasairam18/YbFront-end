import React, { Component } from 'react';
import { Route,Switch,Redirect} from 'react-router-dom';
import NavBar from './components/navbar';
import Carrier from './pages/carrier';
import Interview from './pages/interview';
import ResumeTemp from './components/resumetemp';
import AboutUs from './pages/aboutus';
import MainPage from './pages/main';
import ContactUs from './pages/contactus';
import Footer from './components/footer';
import Error from './components/error';

class MainRoutePage extends Component {
    
    render() { 
        return ( 
            <div className="container-fluid interguiderow">
                <NavBar/>                      
                <Switch>
                    <Route path="/contactus" exact component={ContactUs}/>
                    <Route path="/carrier" exact component={Carrier}/>
                    <Route path="/interview" exact component={Interview}/>
                    <Route path="/resume" exact component={ResumeTemp}/>
                    <Route path="/aboutus" exact component={AboutUs}/>
                    <Route path="/notfound" component={Error}/>
                    <Route path="/" exact component={MainPage}/>
                    <Redirect to="/notfound"/>
                </Switch>
                <Footer/>
            </div>
            
        );
    }
}
 
export default MainRoutePage;