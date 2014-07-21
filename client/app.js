'use strict';

var Ember = require('ember');

var App = Ember.Application.create({
  // Debugging flags, remove in prod
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true
});

// Catch uncaught errors with a promise
Ember.RSVP.configure('onerror', function (error) {
  Ember.Logger.assert(false, error);
});

module.exports = App;
