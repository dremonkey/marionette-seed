'use strict';

// Module Dependencies
var App = require('../../app');
var Backbone = require('backbone');
var Song = require('../../models/song');

var Collection = Backbone.Collection.extend({
  
  model:  Song,

  initialize: function () {
    App.vent.on('song:enqueue', this.enqueue, this);
  },

  enqueue: function (song) {
    App.vent.trigger('app:log', 'Adding "' + song.get('title') + '" to playlist');
    this.add(song);
  }

});

module.exports = Collection;
