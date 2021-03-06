import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('main', function() {
    this.route('new');

    this.route('schedule', { path: '/:team_id' }, function() {
      this.route('new-game');
    });
  });
});

export default Router;
