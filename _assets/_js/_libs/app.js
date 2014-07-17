// JavaScript Document
var App = Ember.Application.create({
	LOG_TRANSITIONS: true							   
});

App.Router.map(function() {
	this.resource('quickadd');
	this.resource('manage');
	this.resource('send');
});