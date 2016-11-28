Template.editBusiness.onCreated(function() {
  this.autorun(() => {
    this.subscribe('business', Router.current().params._id);
  });
});

Template.editBusiness.helpers({
  business: function () {
    return Business.findOne(Router.current().params._id);
  }
});

Template.editBusiness.events({
  'click #button2id': function() {
    Router.go('search');
  },
});