define([
  'jquery',
  'underscore',
  'handlebars',
  'models/game/roundModel',
  'backbone'
], function($, _, Handlebars, RoundModel, Backbone) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'settings': 'showSettings',
      'play': 'showPlay',
      'results': 'showResults',
      
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function() {

    var app_router = new AppRouter,
        roundModel = new RoundModel();
    
    // settings
    app_router.on('route:showSettings', function() {
      require(['views/settings/settingsView'], function(SettingsView) {
        $('#container').html(new SettingsView().render());
      });
    });

    // play
    app_router.on('route:showPlay', function() {
      require(['views/play/playView'], function(PlayView, RoundModel) {
        new PlayView({model:roundModel}).render();
      });
    });

    // results
    app_router.on('route:showResults', function() {
      require(['views/results/resultsView'], function(ResultsView, RoundModel) {
        $('#container').html(new ResultsView({model:roundModel}).render());
      });
    });

    // default
    app_router.on('route:defaultAction', function (actions) {
      require(['views/home/homeView'], function(HomeView) {
        $('#container').html(new HomeView().render());
      });
    });

    Backbone.history.start({pushState: true});

    //return app_router;
  };
  return { 
    initialize: initialize
  };
});
