Meteor.methods({
  'Posts.insert': function(message, imageid, imageurl){
    var post = {
      user:Meteor.user(),
      createdAt: new Date(),
      image: imageid,
      imageurl: imageurl,
      message:message,
      likes:[],
      comments:[],
    };
    Posts.insert(post);
  },
  'changeAvatar': function (user, fileid) {
    console.log(user);
      var file = 'http://placehold.it/150x150';
      if (fileid) {
          file = Images.findOne({_id: fileid});
      }
      var data = file._id;

      Meteor.users.update(this.userId, {$set: {'profile.avatar': data}});
  },
});
