import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'react-mounter';

Main = React.createClass({
  render(){
    var adobj = {id:1, text:'My First Ad', title:'Some Company', image: 'http://placehold.it/150x150'};
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
              <Ad ad={adobj} />
            </div>
          </div>
        </div>
      </div>
    )
  }
});
