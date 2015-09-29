import Ember from 'ember';

export default Ember.Component.extend({
    model: [],
    splats: Ember.computed('model.splats.[]', function() {
        return this.get('model.splats').toArray().reverse();
    })
});
