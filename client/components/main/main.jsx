import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'react-mounter';

Main = React.createClass({
  render(){
    return(
      <div>
        <div className="col-sm-9 col-sm-11" id="main">

        </div>
        <div className="ful col-sm-9">
          <div className="row">
            <div className="col-sm-9">
              Status form
              Post
              <button className="btn btn-med">More</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
