Meteor.methods({

    'Profile.update': function (params) {

        Meteor.users.update({_id: Meteor.userId()}, {$set: {profile: params}}, function() {
            console.log('arguments', arguments);
        });
    }
});
