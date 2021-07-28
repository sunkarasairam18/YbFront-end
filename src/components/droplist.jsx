import React, { Component } from 'react';
import '../css/drop.css'
class DropList extends Component {
    state = {
        content : "Select Here "
    }
    render() { 
        const {title,id,subject,populate,onChange,error,value} = this.props;
        var bool = false;
        if(value === "") bool = true;
        return ( 
            

            <div>               
                <label htmlFor={id} className="drop">{title}*</label>
                <select id={id} onChange={onChange} name={id} className="form-select">
                    <option disabled selected={bool} id="dis">{subject}</option>
                    {populate.map(pop=><option key={pop} value={pop}>{pop}</option>)}  
                </select>
                {error && <div class="form-text text-danger">{title} need to be selected</div>}
            </div>
        );


    }
    
}
 
export default DropList;