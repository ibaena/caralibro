import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

Homelayout = React.createClass({
  render(){
    return(
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-6 ivan">
              <Featurelist />
            </div>
            <div className="col-md-5 col-md-offset-1">
              <Signupform />
            </div>
          </div>
        </div>
      </div>
    )
  }
})
