//Define a collection to hold our tasks
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

  Meteor.startup(function () {
    React.render(<App />, document.getElementById("render-target"));
  });

}