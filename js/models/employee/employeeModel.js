define([
  'underscore',
  'backbone'
], function(_, Backbone) {

   var EmployeeModel = Backbone.Model.extend({
      parse: function(data) {
         // lower case attributes
         var lowerCased = {};
         $.each(data, function(i, v) {
             lowerCased[i.toLowerCase()] = v;
         });
         return lowerCased;
      }
   });
  return EmployeeModel;

});
