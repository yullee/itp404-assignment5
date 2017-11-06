import Ember from 'ember';

export default Ember.Component.extend({
    // handle some thumbnails with an error
    thumbnail: Ember.computed('subreddit.data.thumbnail', function() {
        if(this.get('subreddit.data.thumbnail') === ''
        || this.get('subreddit.data.thumbnail') === 'default'
        || this.get('subreddit.data.thumbnail') === 'self') {
            return false;
        }
          return true;
      }),
  actions: {
    changeScore(newScore) {
      this.set('subreddit.data.score', newScore);
    }
  }
});
