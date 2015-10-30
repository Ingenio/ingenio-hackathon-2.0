import DS from 'ember-data';

export default DS.Model.extend({
  isOfferSubmitted: DS.attr('boolean'),
  anyAdvisorResponsePresent: DS.attr('boolean'),
  userOfferPrice: DS.attr('number'),
  responseFromAdvisors: DS.attr()
});
