import DS from 'ember-data';

export default DS.Model.extend({
  advisorName: DS.attr(),
  description: DS.attr(),
  postedDate: DS.attr(),
  pricePerMinute: DS.attr(),
  profileImageUrl: DS.attr(),
  starRating: DS.attr('number')
});
