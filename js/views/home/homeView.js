define([
  'jquery',
  'handlebars',
  'backbone',
  'text!templates/home/homeTemplate.html'
], function($, Handlebars, Backbone, template) {
  
  return Backbone.View.extend({
    el: 'div',
    handlebars: Handlebars.compile(template),
    events: {
      "click button": "route"
    },
    render: function() {
       return this.handlebars({'stuff':'homeView!'});
    },
    route: function(ev) {
      var button = $(ev.currentTarget);
      window.location = button.html().toLowerCase(); // eehhhh ;)
    }
  });
});
