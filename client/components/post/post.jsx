import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'react-mounter';

Post = React.createClass({
  render(){
    var dimage = '';
    dimage = (
      <div>
        <div className="panel-thumbnail">
          <img src="http://placehold.it/150x150" className="img-responsive postimage" />
        </div>
      </div>
    )
    return(
        <div className="col-sm-12">
          <div className="panel panel-white post panel-shadow">
            <div className="post-heading">
              <div className="pull-left image">
                <img src="http://placehold.it/150x150" className="img-circle avatar" />
              </div>
              <div className="pull-left meta">
                <div className="title h5">
                  <b>Ivan Baena</b>&nbsp;
                  made a post.
                </div>
                <h6 className="text-muted time">An hour ago</h6>
              </div>
            </div>
            <div className="col-md-12 post-description">
              <h3>Hello World</h3>
              <br />
            </div>
            <div className="col-md-12">
              {dimage}
              <br />
            </div>
            <div className="actions">
              <a href="#" className="btn btn-default stat-item">
                <i className="fa fa-thumbs-up icon"></i>
              </a>&nbsp;
              10 likes!2
            </div>
            <div className="post-footer">
              Comments List
            </div>
          </div>
        </div>
    )
  }
});
