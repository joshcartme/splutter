import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  timestamp: DS.attr('number'),
  user: DS.attr('string')
});
