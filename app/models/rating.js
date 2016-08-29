import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.belongsTo('answer', { async: true }),
  rating: DS.attr('boolean'),
  user: DS.belongsTo('user', { async: true })
});
