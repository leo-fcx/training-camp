Meteor.methods({

    'Profile.update': function (params) {

        Meteor.users.update({_id: Meteor.userId()}, {$set: {profile: params}}, function() {
            console.log('arguments', arguments);
        });
    },

    'Profile.find': function(params) {
        console.log('Profile.find', Meteor.userId(), Meteor.users.find({_id: Meteor.userId()}));
        return Meteor.users.find({_id: Meteor.userId()});
    }
});
