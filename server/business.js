Meteor.startup(function() {
  // var rose = JSON.parse(Assets.getText('test.json'));
  // var martha = JSON.parse(Assets.getText('test1.json'));
  // var companions = [rose, martha];

  if(Business.find().count() === 0){

	   var business = JSON.parse(Assets.getText('business.json'));

	  _.each(business, function(doc) {
	    Business.insert(doc)
	    console.log(doc);
	  });

  }
});