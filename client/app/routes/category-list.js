import Ember from 'ember';

var CategoryListModel = Ember.Object.extend({
  showNameYourPriceDialog: false
});

export default Ember.Route.extend({

  model: function() {
    return CategoryListModel.create();
  },
  setupController(controller, model){
    this._super(controller, model);

    Ember.run.later(this,function() {
      model.set('showNameYourPriceDialog',true);
      console.log(model.get('showNameYourPriceDialog'));
    }, 5000);
  }
});
