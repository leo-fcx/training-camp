
Template._header.helpers({

    fullName: function(){

        var profile = Meteor.user().profile;

        if (profile && profile.firstName && profile.lastName)
            return profile.firstName + ' ' + profile.lastName;

        return '';
    },

    primaryEmail: function(){

        return Meteor.user().emails[0].address;
    },

    alternativeEmail: function(){

        if (Meteor.user().emails[1])
            return Meteor.user().emails[1].address;

        return '[Not set]'
    }

});