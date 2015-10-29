/**
 * Created by Matthew Yee and credit to Kelsie for the help 10/28/2015.
 */

Template.postForm.events({

  // handle the form submission
  'submit form': function(event, template) {

    // stop the form from submitting
    event.preventDefault();

    var newPost = {
      title: event.target.title.value,
      url: event.target.url.value
    };

    template.find("form").reset();

    Meteor.call("addPost", newPost);
  }
});