/* global $ */

import Ember from 'ember';

export default Ember.Service.extend({
    findAllForSubreddit(subreddit) {
        return $.getJSON(`https://www.reddit.com/r/${subreddit}.json`).then(function(response) {
            return response.data.children;
        });
    }
});
