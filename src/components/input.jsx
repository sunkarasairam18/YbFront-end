import React, { Component } from 'react';
import '../css/input.css'
class Input extends Component {
    render() { 
        const {label,id,name,require,value,type,holder,onChange,error} = this.props;
        return ( 
        <div className="form-group ">
            <label className="label" htmlFor={id}>{label}{this.isRequire(require)}</label>
            <input 
            type={type} 
            className="form-control" 
            id={id} 
            value={value}
            name={name}
            placeholder={holder}
            onChange={onChange}
            ></input>
            {error && <div class="form-text text-danger">{error}</div>}

        </div> 
    );
    }
    isRequire(require){
        return require ? <span>*</span> : <span></span>;
    }
}
 
export default Input;