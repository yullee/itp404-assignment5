import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  // adding 'model' enables to search every single time - model is going to change -> recompute
  sortedSubreddits: Ember.computed('model', function() {
    let subreddits = this.get('model');

    // sort the date but the model isn't really change - singleton (one single instance )
    let sortedSubreddits = subreddits.sort(function(subredditA, subredditB) {
      let aSubreddit = moment(subredditA.data.score);
      let bSubreddit = moment(subredditB.data.score);
      if(aSubreddit < bSubreddit) {
        return 1;
      }

      if(aSubreddit > bSubreddit) {
        return -1;
      }

      return 0;
    });

    return sortedSubreddits;
  })
});
