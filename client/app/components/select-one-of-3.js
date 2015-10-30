import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['select-one-of-3'],

  actions: {
    optionSelected(price, option) {
      console.info('selected: ' + price);
      //console.info(this.$(option));
      // this.$('.option').addClass('disabled');
      // this.$('.option.active').removeClass('disabled');


    }
  }
});
