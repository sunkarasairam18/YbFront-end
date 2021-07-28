import React, { Component } from 'react';
import Input from './input'; 
import DropList from './droplist';
import Message from './message';
import '../css/resume.css';
import Joi from 'joi-browser';
import axios from 'axios';
import Alert from './modal';



class Resume extends Component {
    state = {
        resume:{
            fullname: "",
            email: "",
            mobile: "",
            currentDesignation: "",
            current_ctc: "",
            expected_ctc: "",
            division:"",
            department:"",
            currentState: "",
            expectedState: "",
            message: ""
        },
        errors: {},
        divisions: [],
        departments: [],
        showalert: false,
        showsucces: false
    }
    async componentDidMount(){
        const {data:departments} = await axios.get("https://divdeparts.herokuapp.com/divdepart/depart");
        this.setState({departments});
        const {data:divisions} = await axios.get("https://divdeparts.herokuapp.com/divdepart/div");
        this.setState({divisions});
    }
    schema = {
        fullname: Joi.string().required().label("Fullname"),
        email: Joi.string().required().email().label("Email"),
        mobile: Joi.string().required().length(10).label("Mobile Number"),        
        currentDesignation: Joi.string().required().label("Current Designation"),
        current_ctc: Joi.number().required().label("Current CTC"),
        expected_ctc: Joi.number().required().label("Expected CTC"),
        division: Joi.string().required().label("Division"),
        department: Joi.string().required().label("Department"),
        currentState: Joi.string().required().label("Current Living State"),
        expectedState: Joi.string().required().label("Expected Working State"),
        message: Joi.string().allow("")
    };
    
    validate = () => {
        const {error} = Joi.validate(this.state.resume,this.schema,{abortEarly: false});
        if(!error) return null;
        const errors = {};
        for(let item of error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;
    }

    upperCase(s){
        return s && s[0].toUpperCase() + s.slice(1);
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {}});
        if(errors) return;
        else{   
            const {data} = await axios.post("https://genreaccount.herokuapp.com/doc/resume",this.state.resume);            
            const resume = {...this.state.resume};
            if(!data.fullname){
                this.handlealert();
                return;
            }
            this.handlesuccess();
            resume.fullname = "";
            resume.email="";
            resume.mobile="";
            resume.currentDesignation="";
            resume.current_ctc="";
            resume.expected_ctc="";
            resume.division="";
            resume.department="";
            resume.currentState="";
            resume.expectedState="";
            resume.message="";
            this.setState({resume});
            
            
        }
    }
    handlealert = () => {
        this.setState({showalert: !this.state.showalert});
    }
    handlesuccess= () =>{
        this.setState({showsucces: !this.state.showsucces});
    }

    validateProperty = ({name,value}) =>{
        const obj = {[name]:value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj,schema);
        return error ?  error.details[0].message : null;
    }

    handleChange = ({currentTarget:input}) => {    
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const resume = {...this.state.resume};
        resume[input.name] = input.value;
        this.setState({resume,errors});
    }

    
    
    handleMessage = ({currentTarget:input}) => {
        const resume = {...this.state.resume};
        resume[input.name] = input.value;
        this.setState({resume});
    }

    // fillform=()=>{
    //     const resume = {...this.state.resume};
    //     resume.fullname = "srinivas";
    //     resume.email= "srinu@gmail.com";
    //     resume.mobile= "4564645646";
    //     resume.currentDesignation= "Manager";
    //     resume.current_ctc = "4500";            
    //     resume.expected_ctc= "5400";
    //     resume.division= "Purchase";
    //     resume.department= "Export";
    //     resume.currentState= "Andhra";
    //     resume.expectedState= "Agra";
    //     resume.message="Thank You";
    //     this.setState({resume});        
    // }

    render() { 
        const {resume,errors,divisions,departments,showsucces,showalert} = this.state;
        return (
            <div className='mainbox'>           
            <Alert show={showsucces} handleShow={this.handlesuccess} subject="Submitted!"/>
            <Alert show={showalert} handleShow={this.handlealert} subject="Email&nbsp;or&nbsp;Mobile number&nbsp;already&nbsp;used!"/>
            
            <form className="box shadow-lg" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-md-12">
                        <Input 
                        label="Full Name" 
                        id="fullname" 
                        name="fullname"
                        require={true} 
                        value={resume.fullname}
                        type="text" 
                        holder="Enter Full Name"
                        onChange={this.handleChange}
                        error={errors.fullname}
                        />                                            
                    </div>
                        
                    <div className="col-md-12">
                        <Input 
                        label="Email" 
                        id="email" 
                        name="email"                        
                        require={true} 
                        value={resume.email}
                        type="text" 
                        holder="Enter Mail Id"
                        onChange={this.handleChange}
                        error={errors.email}
                        />
                    </div>

                    <div className="col-md-12">
                        <Input 
                        label="Mobile No" 
                        id="mobile" 
                        name="mobile"
                        require={true} 
                        value={resume.mobile}
                        type="text" 
                        holder="Enter Mobile Number"
                        onChange={this.handleChange}
                        error={errors.mobile}
                        />
                    </div>
                    
                    <div className="col-md-12">
                        <Input 
                        label="Current Designation" 
                        id="currentDesignation" 
                        name="currentDesignation"
                        require={true} 
                        value={resume.currentDesignation}
                        type="text" 
                        holder="Enter Current Designation"
                        onChange={this.handleChange}
                        error={errors.currentDesignation}
                        />
                    </div>
                    
                    <div className="col-md-6">
                        <Input 
                        label="Current CTC" 
                        id="current_ctc" 
                        name="current_ctc"
                        require={true} 
                        value={resume.current_ctc}
                        type="text" 
                        holder="Enter Current CTC"
                        onChange={this.handleChange}
                        error={errors.current_ctc}
                        />
                    </div>
                     
                    <div className="col-md-6">
                        <Input 
                        label="Expected CTC" 
                        id="expected_ctc" 
                        name="expected_ctc"
                        require={true} 
                        value={resume.expected_ctc}
                        type="text" 
                        holder="Enter Expected CTC"
                        onChange={this.handleChange}
                        error={errors.expected_ctc}
                        />
                    </div>
                    
                    <div className="col-md-6">
                        <DropList 
                        title="Division" 
                        populate={divisions} 
                        id="division" 
                        value={resume.division}
                        onChange={this.handleChange}
                        error={errors.division}
                        subject="select division"/>
                    </div>

                    <div className="col-md-6">
                        <DropList 
                        title="Department" 
                        populate={departments} 
                        id="department" 
                        value={resume.department}
                        onChange={this.handleChange}
                        error={errors.department}
                        subject="select department"/>
                    </div>
                   
                    <div className="col-md-6">
                        <Input 
                        label="Current Living State" 
                        id="currentState" 
                        name="currentState"
                        require={true} 
                        type="text" 
                        holder="Enter Living State"
                        value={resume.currentState}
                        onChange={this.handleChange}
                        error={errors.currentState}
                        />
                    </div>
                    <div className="col-md-6">
                        <Input 
                        label="Expected Working State" 
                        id="expectedState"  
                        name="expectedState"
                        require={true} 
                        type="text" 
                        value={resume.expectedState}
                        holder="Enter Expected State"
                        onChange={this.handleChange}
                        error={errors.expectedState}
                        />
                    </div>
                    
                    <div className="col-md-12">
                        <Message 
                        id="message"
                        name="message"     
                        value={resume.message}                    
                        holder="Enter Message Here"
                        onChange={this.handleMessage}
                        />
                    </div>
                </div> 
                <button className="btn shadow m-2 resumeapply">
                    Submit
                </button>
            </form>
            {/* <button onClick={this.fillform} className="btn btn-primary">Fill</button> */}
            </div>

        );
    }
}
 
export default Resume;