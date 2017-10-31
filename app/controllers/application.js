import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    // Assignment 5
    // searchForEvents: function() {
    //   let subreddit = this.get('subreddit');
    //   this.transitionToRoute('subreddits', subreddit);
    // }

    searchForEvents(event) {
      event.preventDefault();
      let subreddit = this.get('subreddit');
      this.transitionToRoute('subreddits', subreddit);
    }
  }
});
