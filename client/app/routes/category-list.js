import Ember from 'ember';

var CategoryListModel = Ember.Object.extend({
  showNameYourPriceDialog: false,
  advisorList: []
});

export default Ember.Route.extend({

  model: function() {
    return CategoryListModel.create({
      //TODO: muthu - replace the mock advisors with a call to api
      advisorList: [
        {
          "advisorId":7519438305,
          "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget commodo hippo. Phasellus tristique semper leo, et ultrices lorem ornare non. Etiam ornare sollicitudin vehicula. Fusce at ante elementum lorem auctor volutpa",
          "profileImageUrl":"https://randomuser.me/api/portraits/men/64.jpg",
          "advisorName":"dustin vasquez",
          "postedDate":"October 29th, 7:53:36 pm",
          "starRating":5,
          "pricePerMinute":"2.99"
        },
        {
          "advisorId":7880724455,
          "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget commodo hippo. Phasellus tristique semper leo, et ultrices lorem ornare non. Etiam ornare sollicitudin vehicula. Fusce at ante elementum lorem auctor volutpa",
          "profileImageUrl":"https://randomuser.me/api/portraits/men/74.jpg",
          "advisorName":"tim lane",
          "postedDate":"October 29th, 7:53:36 pm",
          "starRating":5,
          "pricePerMinute":"5.99"
        },
        {
          "advisorId":66075036256,
          "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget commodo hippo. Phasellus tristique semper leo, et ultrices lorem ornare non. Etiam ornare sollicitudin vehicula. Fusce at ante elementum lorem auctor volutpa",
          "profileImageUrl":"https://randomuser.me/api/portraits/men/26.jpg",
          "advisorName":"lucas castro",
          "postedDate":"October 29th, 7:53:36 pm",
          "starRating":5,
          "pricePerMinute":"3.99"
        },
        {
          "advisorId":22056402150,
          "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget commodo hippo. Phasellus tristique semper leo, et ultrices lorem ornare non. Etiam ornare sollicitudin vehicula. Fusce at ante elementum lorem auctor volutpa",
          "profileImageUrl":"https://randomuser.me/api/portraits/men/4.jpg",
          "advisorName":"virgil perez",
          "postedDate":"October 29th, 7:53:36 pm",
          "starRating":2,
          "pricePerMinute":"5.99"
        },
        {
          "advisorId":98147216393,
          "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget commodo hippo. Phasellus tristique semper leo, et ultrices lorem ornare non. Etiam ornare sollicitudin vehicula. Fusce at ante elementum lorem auctor volutpa",
          "profileImageUrl":"https://randomuser.me/api/portraits/women/87.jpg",
          "advisorName":"katie warren",
          "postedDate":"October 29th, 7:53:36 pm",
          "starRating":3,
          "pricePerMinute":"3.99"
        },
        {
          "advisorId":84328027256,
          "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget commodo hippo. Phasellus tristique semper leo, et ultrices lorem ornare non. Etiam ornare sollicitudin vehicula. Fusce at ante elementum lorem auctor volutpa",
          "profileImageUrl":"https://randomuser.me/api/portraits/women/48.jpg",
          "advisorName":"mia cox",
          "postedDate":"October 29th, 7:53:36 pm",
          "starRating":2,
          "pricePerMinute":"5.99"
        },
        {
          "advisorId":96445081966,
          "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget commodo hippo. Phasellus tristique semper leo, et ultrices lorem ornare non. Etiam ornare sollicitudin vehicula. Fusce at ante elementum lorem auctor volutpa",
          "profileImageUrl":"https://randomuser.me/api/portraits/women/1.jpg",
          "advisorName":"susan gonzalez",
          "postedDate":"October 29th, 7:53:36 pm",
          "starRating":3,
          "pricePerMinute":"3.99"
        },
        {
          "advisorId":12057359657,
          "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget commodo hippo. Phasellus tristique semper leo, et ultrices lorem ornare non. Etiam ornare sollicitudin vehicula. Fusce at ante elementum lorem auctor volutpa",
          "profileImageUrl":"https://randomuser.me/api/portraits/women/88.jpg",
          "advisorName":"jennifer richards",
          "postedDate":"October 29th, 7:53:36 pm",
          "starRating":1,
          "pricePerMinute":"4.99"
        },
        {
          "advisorId":93795547449,
          "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget commodo hippo. Phasellus tristique semper leo, et ultrices lorem ornare non. Etiam ornare sollicitudin vehicula. Fusce at ante elementum lorem auctor volutpa",
          "profileImageUrl":"https://randomuser.me/api/portraits/men/81.jpg",
          "advisorName":"owen peters",
          "postedDate":"October 29th, 7:53:36 pm",
          "starRating":1,
          "pricePerMinute":"5.99"
        },
        {
          "advisorId":61854022393,
          "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget commodo hippo. Phasellus tristique semper leo, et ultrices lorem ornare non. Etiam ornare sollicitudin vehicula. Fusce at ante elementum lorem auctor volutpa",
          "profileImageUrl":"https://randomuser.me/api/portraits/women/30.jpg",
          "advisorName":"lucy fisher",
          "postedDate":"October 29th, 7:53:36 pm",
          "starRating":4,
          "pricePerMinute":"1.99"
        }
      ]
    });
  },
  setupController(controller, model){
    this._super(controller, model);

    Ember.run.later(this,function() {
      model.set('showNameYourPriceDialog',true);
      console.log(model.get('showNameYourPriceDialog'));
    }, 5000);
  }
});
