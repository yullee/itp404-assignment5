/* global $ */
import Ember from 'ember';

export default Ember.Route.extend({
    // Assignment 5
    // model(params) {
    //
    //   let subreddit = params.subreddit;
    //   let url = `https://www.reddit.com/r/${subreddit}.json`;
    //
    //   return $.getJSON(url);
    // }

    reddit: Ember.inject.service(),
    model(params) {
        return this.get('reddit').findAllForSubreddit(params.subreddit);
    }
});
