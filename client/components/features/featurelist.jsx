import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

Featurelist = React.createClass({
  features:[
    {icon:'fa fa-image fa-2x',bigtext:"See photos and updates",littletext:"From friends in news feed"},
    {icon:'fa fa-share fa-2x',bigtext:"Share what\'s new",littletext:"in your life on your timeline"},
    {icon:'fa fa-search fa-2x',bigtext:"Find more",littletext:"of what you\'re looking for"}
  ],
  render(){
    var rows = this.features.map(function(feature){
      return (
        <li key={feature.icon}>
          <h3 className="btn btn-lg">
            <i className={feature.icon}></i>
            <span>
              <strong> {feature.bigtext} </strong>
              <small> {feature.littletext}</small>
            </span>
          </h3>
        </li>
      )
    });
    return (
      <div>
        <h2 className="col-md-11 featurelist hidden-xs">
          Connect With Friends and the world around you on Fakebook
        </h2>
        <ul className="ds-btn hidden-xs">
          {rows}
        </ul>
      </div>
    )
  }
});
