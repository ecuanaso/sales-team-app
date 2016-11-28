
Meteor.startup(function () {
    
    Bert.defaults = {
      hideDelay: 3500,
      // Accepts: a number in milliseconds.
      style: 'fixed-bottom',
      // Accepts: fixed-top, fixed-bottom, growl-top-left,   growl-top-right,
      // growl-bottom-left, growl-bottom-right.
      type: 'default'
      // Accepts: default, success, info, warning, danger.
    };

    sAlert.config({
        effect: '',
        position: 'top-right',
        timeout: 5000,
        html: false,
        onRouteClose: true,
        stack: true,
        // or you can pass an object:
        // stack: {
        //     spacing: 10 // in px
        //     limit: 3 // when fourth alert appears all previous ones are cleared
        // }
        offset: 0, // in px - will be added to first alert (bottom or top - depends of the position in config)
        beep: false
        // examples:
        // beep: '/beep.mp3'  // or you can pass an object:
        // beep: {
        //     info: '/beep-info.mp3',
        //     error: '/beep-error.mp3',
        //     success: '/beep-success.mp3',
        //     warning: '/beep-warning.mp3'
        // }
    });

});