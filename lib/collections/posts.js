/**
 * Created by MGY on 10/28/2015.
 */
Posts = new Mongo.Collection('posts');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("posts", function () {
    return Posts.find();
  });
}

if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.subscribe("posts");
}