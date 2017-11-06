/* global $ */
import Ember from 'ember';

export default Ember.Route.extend({
    reddit: Ember.inject.service(),
    model(params) {
        return this.get('reddit').findAllForSubreddit(params.subreddit);
    }
});
