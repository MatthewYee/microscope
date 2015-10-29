/**
 * Created by MGY on 10/28/2015.
 */
var postsData = [
  {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  },
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  }
];

//create a template helper called posts that return postsData array

Template.postsList.helpers({
   posts: postsData // setup dummy prototype data in this array
});