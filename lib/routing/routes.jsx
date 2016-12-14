import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

publicRoutes = FlowRouter.group({
  name:'publicroutes'
});
privateRoutes = FlowRouter.group({
  name:'privateroutes',
  triggersEnter:[function(context, redirect){
    if(!Meteor.userId()){
      return FlowRouter.go('/');
    }
  }],
});
publicRoutes.route('/',{
  name:'Home',
  action(){
    mount(Homelayout,{})
  }
});
privateRoutes.route('/dashboard',{
  name:'Dashboard',
  action(){
    mount(Layout,{
      sidebar:<Sidebar />,
      content: <Main />
    })
  }
});
privateRoutes.route('/profile',{
  name:'Profile',
  action: function(){
      mount(Layout, {
        sidebar:<Sidebar />,
        content:<Profile />,
      })
  }
});

publicRoutes.route('/signout',{
  name:'Signout',
  action: function(){
    Meteor.logout(function(){
      FlowRouter.go('/');
    });
  }
})
