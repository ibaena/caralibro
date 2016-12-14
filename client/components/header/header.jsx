import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import ReactDOM from 'react-dom';

Header = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    let data = {};
    data.currentUser = Meteor.user();
    return data;
  },
  getInitialState(){
    return {
      message:'',
      messageClass: 'hidden',
    }
  },
  displayError(message){
    this.setState({
      message: message,
      messageClass: 'alter alert-danger message',
    })
  },
  handleSubmit(e){
    e.preventDefault();
    this.setState({message:'', messageClass:'hidden'});
    var that = this;
    var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
    var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
    Meteor.loginWithPassword(email, password, function(e){
      if(e){
        that.displayError(e.reason);
        console.log(e.reason);
      }else{
        FlowRouter.go('/dashboard');
      }
    })
  },
  render(){
    return (
      <div>
        <span className="navbar-react">
          <i className=" fa fa-facebook"></i>akebook
        </span>
        <div className="collapse navbar-collapse" id="navbar">
          <form onSubmit={this.handleSubmit} role="form" id="signin" className="navbar-form navbar-right">
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
            <br />
            <span className={this.state.messageClass}>{this.state.message}</span>
          </form>
        </div>
      </div>
    )
  }
});
