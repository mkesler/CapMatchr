define([
  'jquery',
  'handlebars',
  'backbone',
  'text!templates/results/resultsTemplate.html',
], function($, Handlebars, Backbone, template) {
  
  var ResultsView = Backbone.View.extend({
    el: 'div',
    handlebars: Handlebars.compile(template),
    events: {
      "click button": "route"
    },
    initialize: function() {
    },
    render: function() {
      return this.handlebars(this.model.toJSON());
    },
    route: function(ev) {
      var button = $(ev.currentTarget);
      window.location = button.html().toLowerCase(); // eehhhh ;)
    }
  });

  return ResultsView;
});


Handlebars.registerHelper('log', function(options) {
  console.log(this);
});