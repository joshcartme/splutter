// app/routes/application.js
import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    newSplat: function(content) {
      this.store.createRecord('splat', {
        content: content,
        timestamp: new Date().getTime(),
        user: this.get('session').get('currentUser').email
      }).save();
      var splat = Ember.$('textarea');
      splat.val('');
      splat.attr('placeholder', 'Success, say something else?');
    }
  }
});