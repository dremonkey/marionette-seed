'use strict';

// Module Dependencies
var App = require('../../app');
var Backbone = require('Backbone');

var PlayerModel = Backbone.Model.extend({

  defaults: {
    song: ''
  },

  initialize: function () {
    App.on('song:play', this.play)
  },

  play: function (song) {
    this.set('song', song);
  }
});

module.exports = PlayerModel;