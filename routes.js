Router.route('/', {
	name: 'login',
	layoutTemplate: 'layout',
	//onAfterAction: onAfterAction()
});

Router.route('/search', {
	name: 'search',
	layoutTemplate: 'layout',
	//onAfterAction: onAfterAction()
});

Router.route('/business-list', {
	name: 'businessList',
	layoutTemplate: 'layout',
	//onAfterAction: onAfterAction()
});

Router.route('/edit-business/:_id', {
  name: 'editBusiness',
  layoutTemplate: 'layout'
});