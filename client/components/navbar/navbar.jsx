import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'react-mounter';

Navbar = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    let data = {};
    data.currentUser = Meteor.user();
    return data;
  },
  componentDidMount(){
    var users = Meteor.users.find({}, (fields:{profile:1})).fetch();
    var usernames = [];
    users.map(function(user){
      usernames.push(user.profile.fullname);
    });
    $('#typeahead').typeahead({
      name:'users',
      local:usernames,
    });
  },
  handleSubmit(e){
    e.preventDefault();
    Flowrouter.go('/users' + (this.refs.searchText.value).trim());

  },
  render(){
    var fullname = '';
    if(this.data.currentUser && this.data.currentUser.profile){
      fullname = this.data.currentUser.profile.firstname + ' '+ this.data.currentUser.profile.lastname;
    }
    return(
      <div className="navbar navbar-blue navbar-fixed-top">
        <div className="navbar-header">
          <button className="navbar-toggle">
            <span className="sr-only"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href="/dashboard" className="navbar-brand logo">
            <i className="fa fa-facebook"></i>
          </a>
        </div>
        <nav className="collapse navbar-collapse">
          <form role="form" className="navbar-form navbar-left" onSubmit={this.handleSubmit}>
            <div className="input-group input-group-sm bs-example">
              <input ref="searchText" id="typeahead" type="text" className="form-control tt-query" />
              <div className="input-group-btn searchBtn">
                <i className="fa-search"></i>
              </div>
            </div>
          </form>
          <ul className="nav navbar-nav">
            <li>
              <a href="/dashboard"><i className="fa fa-home"></i> News Feed</a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a data-toggle="dropdown" href="#" className="dropdown-toggle">
                <i className="fa fa-user"> {fullname}</i>
              </a>
            <ul className="dropdown-menu">
              <li>
                <a href="/profile">Edit Profile</a>
              </li>
              <li>
                <a href="/signout">Logout</a>
              </li>
            </ul>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
});
