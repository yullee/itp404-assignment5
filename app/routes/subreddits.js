import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
      // console.log(params.subreddit);
      // console.log(subreddit);

      let subreddit = params.subreddit;
      let url = `https://www.reddit.com/r/${subreddit}.json`;
      // let url =`http://api-eventful.herokuapp.com/api/events?keywords=${subreddit}`;

      return $.getJSON(url);
    }

});
