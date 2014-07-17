window.txtConsole = Ember.Application.create();

App.Router.map(function() {
	this.resource('quickadd');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
