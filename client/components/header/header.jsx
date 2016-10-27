import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

Header = React.createClass({
  render(){
    return (
      <div>
        <span className="navbar-react">
          <i className=" fa fa-facebook"></i>akebook
        </span>
        <div className="collapse navbar-collapse" id="navbar">
          <form role="form" id="signin" className="navbar-form navbar-right">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-user"></i>
              </span>
              <input type="text" placeholder="Email Address" id="email" ref="email" className="form-control" />
            </div>
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-lock"></i>
              </span>
              <input type="password" placeholder="Password" id="password" ref="password" className="form-control" />
            </div>
            <button className="btn btn-primary" type="submit">Login</button>
          </form>
        </div>
      </div>
    )
  }
});
