define([
  'underscore',
  'backbone',
  'collections/employees/employeeCollection',
  'utils',
], function(_, Backbone, EmployeeCollection, Utils) {

  var RoundModel = Backbone.Model.extend({
    initialize: function() {
      var self = this;
      if(!localStorage.gamestate) {
        console.log('starting new game');
        var allEmployees = new EmployeeCollection();
        allEmployees.on('sync', function() {          
          // save the data
          self.set({
            'employees': Utils.selectEmployees(this),
            'allNames': Utils.selectNames(this),
            'round': 1,
            'results': [],
            'totalCorrect': 0
          });
          self.save();
        });  
        allEmployees.fetch();
      }
      else {
        self.fetch();
      }
    },
    sync: function(method, model) {
      switch(method) {
        case 'create':
          localStorage.gamestate = JSON.stringify(model);
          this.fetch();
        break;
        case 'read':
          var state = $.parseJSON(localStorage.gamestate),
              currentName = state.employees[state.round-1].firstname + ' ' + state.employees[state.round-1].lastname;
          model.set({
            'round': state.round,
            'employees': state.employees,
            'currentEmployee': state.employees[state.round-1],
            'allNames': state.allNames,
            'nameChoices': [currentName].concat(Utils.selectIncorrectNames(state.allNames, currentName)).sort(function(){return 0.5 - Math.random()}),
            'correctName': currentName,
            'results': state.results,
            'totalCorrect': state.totalCorrect,
            'done': state.done
          });
        break;
        case 'update':
          console.log('update');
        break;
      }
    }
  });
  return RoundModel;

});
