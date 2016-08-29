import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  addNewAnswer: false,
  actions: {
    saveAnswer1() {
      if(this.get('currentUser.loggedInUser') != null) {
        var params = {
          user: this.get('currentUser.loggedInUser'),
          body: this.get('body'),
          question: this.get('question'),
          timestamp: Date.now()
        };
        this.set('addNewAnswer', false);
        this.sendAction('saveAnswer2', params);
      } else {
        alert('please login before answering a question.');
      }
    },
    showAnswerForm() {
      this.set('addNewAnswer', true);
    }
  }
});
