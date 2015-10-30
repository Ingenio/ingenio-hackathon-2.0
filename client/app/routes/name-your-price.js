import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('nameyourprice',{
      isOfferSubmitted: false,
      anyAdvisorResponsePresent: false,
      userOfferPrice: 0, //Offer price what user chooses
      responseFromAdvisors: Ember.A([])
    });
  },

  actions: {
    onOfferSelected: function(price){
      var model = this.modelFor(this.routeName);
      console.log(price);
      model.set('userOfferPrice', price);
      model.set('isOfferSubmitted',true);
      model.set('anyAdvisorResponsePresent',true);


      Ember.run.later(this, function() {
        model.get('responseFromAdvisors').pushObject({
          advisorId: 52108343528,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget commodo hippo. Phasellus tristique semper leo, et ultrices lorem ornare non. Etiam ornare sollicitudin vehicula. Fusce at ante elementum lorem auctor volutpa',
          profileImageUrl: 'https://randomuser.me/api/portraits/men/98.jpg',
          advisorName: 'Muthu R',
          postedDate: 'October 29th, 4:07:19 pm',
          starRating: 4,
          pricePerMinute: '1.99',
          minutesOffered: 20,
          actualTotalPrice: 50
        });
      }, 2000);

      Ember.run.later(this, function() {
        model.get('responseFromAdvisors').pushObject({
          advisorId: 52108343529,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget commodo hippo. Phasellus tristique semper leo, et ultrices lorem ornare non. Etiam ornare sollicitudin vehicula. Fusce at ante elementum lorem auctor volutpa',
          profileImageUrl: 'https://randomuser.me/api/portraits/men/89.jpg',
          advisorName: 'Anton V',
          postedDate: 'October 29th, 4:07:19 pm',
          starRating: 3,
          pricePerMinute: '2.99',
          minutesOffered: 15,
          actualTotalPrice: 45
        });
      }, 3000);


      Ember.run.later(this, function() {
        model.get('responseFromAdvisors').pushObject({
          advisorId: 521083453529,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget commodo hippo. Phasellus tristique semper leo, et ultrices lorem ornare non. Etiam ornare sollicitudin vehicula. Fusce at ante elementum lorem auctor volutpa',
          profileImageUrl: 'https://randomuser.me/api/portraits/men/68.jpg',
          advisorName: 'Krishna R',
          postedDate: 'October 29th, 4:07:19 pm',
          starRating: 5,
          pricePerMinute: '.99',
          minutesOffered: 40,
          actualTotalPrice: 40
        });
      }, 4000);

    }
  }
});
