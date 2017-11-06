import Ember from 'ember';

export default Ember.Component.extend({
    updated: 0, // initially set changed as 0
    // up is clickable
    upClicked: Ember.computed('updated', function() {
        return this.get('updated') < 1;
    }),

    // down is clickable
    downClicked: Ember.computed('updated', function() {
    return this.get('updated') > -1;
    }),

    actions: {
        increment() {
            let newValue = this.get('score') + 1;
            this.set('updated', this.get('updated') + 1);
            this.get('onvote')(newValue);
            console.log("vote incremented: " + newValue);
        },

        decrement() {
            let newValue = this.get('score') - 1;
            this.set('updated', this.get('updated') - 1);
            this.get('onvote')(newValue);
            console.log("vote decremented: " + newValue);
        }
    }
});
