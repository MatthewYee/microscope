/**
 * Created by MGY on 10/28/2015.
 */

//create a template helper called posts that return postsData array

Template.postsList.helpers({
   'posts' :function() {
     return Posts.find();
   }
});