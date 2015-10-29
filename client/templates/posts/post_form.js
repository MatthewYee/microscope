/**
 * Created by MGY on 10/29/2015.
 */
Template.postForm.events({
  // handle the form submission
  'submit form': function(event, template) {

    // stop the form from submitting
    event.preventDefault();

    Posts.insert({
      title: event.target.url.value,
      url: event.target.url.value
    });
    template.find("form").reset();
  }

});