Template.login.events({
  'submit #loginForm':function(event){
    // Prevent default browser form submit
    event.preventDefault();

    var username = $('[name=name]').val();
    var password = $('[name=password]').val();
    Meteor.loginWithPassword(username, password, function(error,reason){
      if (error){
            
      //   var errorMessage = "The reason you're not able to login is " + error.reason;
        // Session.set('erroMsgSession',error.reason );
      console.log(error.reason);
      Bert.alert(error.reason, 'danger');
      
      } else {
      
       //Router.go('home');
       Bert.alert("Congratulations you've logged in successfully!", 'success');
      }
    });   
  },

});
