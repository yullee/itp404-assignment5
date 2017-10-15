import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    searchForEvents: function() {
      let subreddit = this.get('subreddit');
      this.transitionToRoute('subreddits', subreddit);
    }
  }
});
