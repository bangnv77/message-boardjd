import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    saveAnswer1() {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        question: this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer2', params);
    },
    showAnswerForm() {
      this.set('addNewAnswer', true);
    }
  }
});
