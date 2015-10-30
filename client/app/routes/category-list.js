import Ember from 'ember';

var CategoryListModel = Ember.Object.extend({
  showNameYourPriceDialog: false,
  advisorList: []
});

export default Ember.Route.extend({

  categoryListModel: null,

  model: function() {
    this.categoryListModel = CategoryListModel.create({
      advisorList: []
    });

    return this.store.findAll('advisor')
      .then((advisors) => {
        let model = CategoryListModel.create({
          advisorList: advisors
        });

        this.set('categoryListModel', model);
        return this.get('categoryListModel');
      });
  },

  actions: {
    toggleModal: function() {
      console.info('toggle modal')
      this.toggleProperty('categoryListModel.showNameYourPriceDialog');
    }
  },

  setupController(controller, model) {
    this._super(...arguments);

    Ember.run.later(this, function() {
      model.set('showNameYourPriceDialog', true);
    }, 10000);
  }
});
