import Ember from 'ember';

export default Ember.Component.extend({
    model: [],
    splats: Ember.computed('model.[]', function() {
        return this.get('model').toArray().reverse();
    })
});
