
Template.profile.helpers({
    users: function () {
        return Meteor.users;
    },
    userSchema: function () {
        return Schema.User;
    }
});

/*
AutoForm.hooks({
    updateProfile: hooksObject
});*/
