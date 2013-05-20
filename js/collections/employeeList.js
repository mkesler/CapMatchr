define([
  'jquery',
  'underscore',
  'backbone',
  'models/employee/employeeModel'
], function($, _, Backbone, EmployeeModel){
  var EmployeeList = Backbone.Collection.extend({
    model: EmployeeModel
  });
 
  return EmployeeList;
});
