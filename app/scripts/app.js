'use strict';

// Module Dependencies
var $ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

// Without declaring $ on Backbone and Marionette the app will fail to load
// This is the accepted convention for require/modules to use a non-global $
// @see https://github.com/jashkenas/backbone/pull/3038
Backbone.$ = $;
Marionette.$ = Backbone.$;

var App = new Marionette.Application();

// Basic App Logging
App.vent.on('app:log', function () {
  if (arguments.length === 1 && typeof arguments[0] === 'string') {
    var msg = arguments[0];
    console.log('App:', msg);
  } else {
    console.log(arguments);
  }
});

// A 'region' is a visible area of the screen, built out without knowing what content 
// was going to be displayed in it at runtime. It’s defined in the HTML markup.
App.addRegions({
  header: '#site-header',
  viz: '#visualizer',
  player: '#audioplayer',
});

App.on('initialize:before', function () {

  // Do stuff before view rendering
  App.vent.trigger('app:log', 'Initialize');
});

App.on('initialize:after', function () {
  Backbone.history.start();
});

module.exports = App;