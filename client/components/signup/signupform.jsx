import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

Signupform = React.createClass({
  render(){
    return (
      <div className="row">
        <div className="signup">
          <h1>Sign up</h1>
            <p className="text-muted">
              It's free and always will be.
            </p>
        </div>
        <form>
          <div className="col-sm-9">
            <div className="row">
              <div className="col-sm-6 form-group">
                <input name="first_name" placeholder="First Name" ref="first_name" type="text" className="form-control" />
              </div>
              <div className="col-sm-6 form-group">
                <input name="last_name" placeholder="Last Name" ref="last_name" type="text" className="form-control" />
              </div>
              <div className="col-sm-12 form-group">
                <input name="email" placeholder="Email or mobile number" ref="email" type="text" className="form-control" />
              </div>
              <div className="col-sm-12 form-group">
                <input name="password" placeholder="Password" ref="password" type="password" className="form-control" />
              </div>
              <div className="col-sm-12 form-group">
                <button type="submit" className="btn btn-md btn-success">Sign Up</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
})
