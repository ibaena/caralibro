import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'react-mounter';

Main = React.createClass({
  render(){
    return(
        <div className="col-sm-9 col-sm-11" id="main">
        <div className="full col-sm-9">
          <div className="row">
            <div className="col-sm-9">
              <Statusform />
              <Post />
              <button className="btn btn-med">More</button>
            </div>
            <div className="col-sm-3">
              Ads
            </div>
          </div>
        </div>
      </div>
    )
  }
});
