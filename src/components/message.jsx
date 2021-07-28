import React, { Component } from 'react';

class Message extends Component {
    state = {  }
    render() { 
        const {id,name,holder,onChange,value} = this.props;
        return (
        <div className="form-group">
            <label className="label" htmlFor={id}>Message</label>
            <textarea 
            className="form-control" 
            id={id} 
            name={name}
            value={value}
            placeholder={holder}
            onChange={onChange}
            rows="3"                 
            ></textarea>
        </div> 
    );
    }
}
 
export default Message;