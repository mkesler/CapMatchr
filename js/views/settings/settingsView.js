define([
  'jquery',
  'handlebars',
  'backbone',
  'text!templates/settings/settingsTemplate.html'
], function($, Handlebars, Backbone, template) {
  
  var SettingsView = Backbone.View.extend({
    handlebars: Handlebars.compile(template),
    render: function() {
      return this.handlebars();
    }
  });

  return SettingsView;
});
