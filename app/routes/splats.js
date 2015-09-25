// app/routes/application.js
import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    newSplat: function(content) {
      console.log('Creating splat', content, this.get('session'))
      this.store.createRecord('splat', {
        content: content,
        timestamp: new Date().getTime(),
        user: this.get('session').get('currentUser').email
      }).save();
    }
  }
});