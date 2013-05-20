require.config({
   // need to make handlebars and backbone compatible with require
   shim: {
     handlebars : {
         exports: "Handlebars"
     },
     backbone: {
       deps: ['underscore', 'jquery'],
       exports: 'Backbone'
     }
   },
   paths: {
      jquery: 'libs/jquery/jquery',
      underscore: 'libs/underscore/underscore',
      handlebars: 'libs/handlebars/handlebars',
      backbone: 'libs/backbone/backbone',
      localstorage: 'libs/localStorage/localstorage',
      utils: 'utils',
      templates: '../templates',
   }
});

// bootstrap
require([
  'app',
], function(App){
  App.initialize();
});
