import Ember from 'ember';

export default Ember.Controller.extend({
     email: {
         read: false, // Set a read status as false
         title: 'ITP 404 Notification'
     },
     actions: {
        searchForEvents(event) {
          event.preventDefault();
          let subreddit = this.get('subreddit');
          this.transitionToRoute('subreddits', subreddit);
        },

        markAsRead() {
          this.set('email.read', true);
        }
    }
});
