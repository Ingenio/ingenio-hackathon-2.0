import Ember from 'ember';

export default Ember.Component.extend({
  hasUserOffer: function(){
    return (this.get('offerPrice') && this.get('offerPrice') > 0);
  }.property(),

  starRatingImageUrl: function() {
    return ('http://i.keen.com/D1_k3ratingstars-' + this.get('advisorInfo').starRating + '_V1.png');
  }.property()
});
