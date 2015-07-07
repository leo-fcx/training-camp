ProfileController = AppController.extend({
    waitOn: function () {
        return this.subscribe('items');
    },
    data: {
        myItem: function(){
            console.log(Items.findOne());
            return Items.findOne();
        }
    },

    //data: {
    //    email: function () {
    //        return Meteor.user().emails['0'].address;
    //    },
    //    profile: function () {
    //        return Meteor.user().profile;
    //    }
    //},
    onAfterAction: function () {
        Meta.setTitle('My profile');
    }
});

ProfileController.events({

    //'click .btn.save': function (event, template) {
    //
    //    Meteor.call('Profile.update', {
    //        firstName: template.find('input#at-field-first-name').value,
    //        lastName: template.find('input#at-field-last-name').value,
    //        alternativeEmail: template.find('input#at-field-alternative-email').value,
    //        repository: template.find('input#at-field-repository').value
    //    });
    //},
    //
    //'click .btn.discard': function (event, template) {
    //    var profile = Meteor.user().profile;
    //    template.find('input#at-field-first-name').value = profile.firstName;
    //    template.find('input#at-field-last-name').value = profile.lastName;
    //    template.find('input#at-field-alternative-email').value = profile.alternativeEmail;
    //    template.find('input#at-field-repository').value = profile.repository;
    //}

    'click button.btn-primary': function (event, template) {
        //event.preventDefault();
    }
});
