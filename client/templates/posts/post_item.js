/**
 * Created by Matthew Yee and credit to Kelsie Yamakara for help on 10/28/2015.
 */
Template.postItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});