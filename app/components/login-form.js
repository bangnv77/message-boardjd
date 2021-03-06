import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  actions: {
    login(users) {
      var loginName = this.get('loginName');
      var password = this.get('password');
      var tempUser = null;
      users.forEach(function(user) {
        if(user.get('userName') === loginName) {
          tempUser = user;
        }
      });
      if(tempUser != null) {
        if(password === tempUser.get('password')) {
          this.get('currentUser').setUser(tempUser);
          alert("logged in successfully");
          alert(this.get('currentUser.loggedInUser.userName'));
        } else {
          alert("Password is incorrect");
        }
      } else {
        alert("UserName doesn't exist.");
      }
    }
  }
});
