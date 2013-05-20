define([
  'collections/employees/employeeCollection'
  ], function(EmployeeCollection) {
  return {
    selectEmployees: function(allEmployees) {
      // randomly generate ids
      var randomIds = new Array(allEmployees.models.length);
      for(var i=1;i<=randomIds.length;i++) {
        randomIds[i-1] = i;
      }
      randomIds.sort( function() { return 0.5 - Math.random() } );       
      
      // create a new collection of 10 employees
      var sortedEmployees = new EmployeeCollection();
      for(var i=0; i<10; i++) {
        sortedEmployees.add(allEmployees.get(randomIds[i]));
      }

      return sortedEmployees;
    },
    selectNames: function(allEmployees) {
      // create an array of all names
      var names = new Array(allEmployees.length);
      $.each(allEmployees.models, function(i) {
        names[i] = this.get('firstname') + ' ' + this.get('lastname');
      });

      return names;
    },
    /**
     * Returns two random names from all names that don't match 
     * the given name.
     */
    selectIncorrectNames: function(names, correctName) {
      var incorrectNames = new Array(),
          allNames = names.slice(0);
      while(incorrectNames.length < 2) {
        var index = Math.floor(Math.random()*allNames.length);
        var name = allNames[index];
        if(name != correctName) {
          incorrectNames.push(name);
          allNames.splice(index, 1);
        }
      }      

      return incorrectNames;
    }
  }
});