// app/routes/application.js
import Ember from 'ember';

var ref = new Firebase("https://splutter.firebaseio.com");

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },

  model() {
    return Ember.RSVP.hash({
        splats: this.store.findAll(
          'splat'
        ).then(function(splats){
          return splats;
        }),
        points: [
          {x: 15, y: 5},
          {x: 95, y: 65},
          {x: 45, y: 75},
          {x: 15, y: 45},
          {x: 55, y: 25}
        ]
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