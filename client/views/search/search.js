Template.search.helpers({


  BusinessIndex: () => BusinessIndex,
  btnAttrs: function() {
    return { class: 'btn' };
  },

  inputAttrs: function () {
    return { 'class': 'form-control', 'placeholder': 'Start searching...', id: 'search' };
  },
  // 'truncateContent': function(){

  //     var t = this.content;
  //     var string = t.substring(0, 600)
  //     return string + '..';
  // },
  btnAttrs: function() {
    return { class: 'btn' };
  },
});

Template.search.events({
  'keyup #search': function(event, template) {
    BusinessIndex.getComponentMethods().search(event.currentTarget.value);
  }
});