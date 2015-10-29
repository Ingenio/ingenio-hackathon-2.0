import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('ask-keen');
  this.route('dashboard');
  this.route('chat');
  this.route('category-list');
  this.route('name-your-price');
});

export default Router;
