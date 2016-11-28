Meteor.publish('business', function(businessid) {
  return Business.find({_id: businessid });
});