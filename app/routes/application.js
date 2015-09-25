// app/routes/application.js
import Ember from 'ember';

var ref = new Firebase("https://splutter.firebaseio.com");

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },

  model() {
    console.log('store', this.store);
    return this.store.findAll(
      'splat'
    ).then(function(splats){
      return splats;
    });
  },

  actions: {
    signIn: function(provider, email, password) {
        console.log(provider, name, email)
        this.get("session").open("firebase", {
            provider: provider,
            email: email,
            password: password
        }).then(function(data) {
            console.log(data.currentUser);
        }).catch(function(err){
            console.log(err);
        });
    },

    signUp: function(email, password) {
        ref.createUser({
          email    : email,
          password : password
        }, function(error, userData) {
          if (error) {
            console.log("Error creating user:", error);
          } else {
            console.log("Successfully created user account with uid:", userData.uid);
          }
        });
    },

    signOut: function() {
      this.get("session").close();
    }
  }
});