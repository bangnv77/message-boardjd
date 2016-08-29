import Ember from 'ember';

export default Ember.Component.extend({
  editQuestion: false,
  actions: {
    editQuestionFormShow() {
      this.set('editQuestion', true);
    },
    saveChanges(question) {
      console.log(question);
      this.set('editQuestion', false);
      question.save();
    },
    deleteQuestion(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.set('editQuestion', false);
        this.sendAction('deleteQuestion', question);
      }
    }
  }
});
