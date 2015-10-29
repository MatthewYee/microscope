/**
 * Created by Matthew Yee and credit to Kelsie for help  on 10/29/2015.
 */

Meteor.methods({

  addPost: function(newPost) {
    Posts.insert(newPost);
  }

});