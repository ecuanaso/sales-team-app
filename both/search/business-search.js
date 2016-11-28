BusinessIndex = new EasySearch.Index({
  collection: Business,
  fields: ['name'],
  engine: new EasySearch.MongoDB({
    sort: function () {
	  return { createdAt: -1 };
	},

    selector: function(searchObject, options, aggregation) {
      var selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
      // selector.navbar = { $ne: false };
      return selector;
    }
  })
});