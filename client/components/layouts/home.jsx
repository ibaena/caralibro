import React from 'react';
import ReactDOM from 'react-dom';

Homelayout = React.createClass({
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            Features
          </div>
          <div className="col-md-5 col-md-offset-1">
            Sign Up!
          </div>
        </div>
      </div>
    )
  }
})
