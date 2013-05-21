define([
  'jquery',
  'handlebars',
  'backbone',
  'text!templates/play/playTemplate.html',
  'text!templates/play/roundTemplate.html'
], function($, Handlebars, Backbone, template, roundTemplate) {
  
  var PlayView = Backbone.View.extend({
    el: 'div', // this is required for events to work?
    evaluating: false,
    handlebars: Handlebars.compile(template),
    events: {
      "click button": "evaluateSelection"
    },
    initialize: function() {
      var self = this;
      this.model.on('change:currentEmployee', function() {
        self.evaluating = false;
        self.render();
      });
      this.model.on('change:done', function() {
        self.evaluating = false;
        self.render();
      });
    },
    render: function() {
      console.log(this.model.get('done'));
      if(this.model.get('done')) {
        window.location = 'results';
      }
      var self = this;
      // Use a partial template for the picture and names
      Handlebars.registerPartial("round", roundTemplate);
      $('#container').html(self.handlebars(self.model.toJSON()));
      $('.play').fadeIn(700);      
    },
    evaluateSelection: function(ev) {
      if(!this.evaluating) { // this seems weird - need to unbind BB events?
        this.evaluating = true;
        var self = this;

        // update the dom and add to results
        var selection = $(ev.currentTarget);
        if(selection.data('name') == this.model.get('correctName')) {
          selection.addClass('correct');
          self.model.get('currentEmployee')['result'] = true;
          self.model.set('totalCorrect', self.model.get('totalCorrect')+1);
        }
        else {
          selection.addClass('incorrect');
          self.model.get('currentEmployee')['result'] = false;
          $('button[data-name="'+ this.model.get('correctName') + '"]').addClass('correct');
        }

        // advance the round or go to results
        setTimeout(function() {
          $('.play').fadeOut(500, function() {
            if(self.model.get('round') == 10) {
              self.model.set('done', true);
            }
            else {
              self.model.set('round', self.model.get('round') + 1);  
            }

            self.model.save();
          });        
        }, 1000);
      }
    }
  });

  return PlayView;
});

Handlebars.registerHelper('log', function(options) {
  //console.log(this);
});