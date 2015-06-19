ProfileController = AppController.extend({
    waitOn: function() {
        return this.subscribe('items');
    },
    data: {
        email: function(){
            return Meteor.user().emails['0'].address;
        }
    },
    onAfterAction: function () {
        Meta.setTitle('My profile');
    }
});

ProfileController.events({
    'click [data-action=doSomething]': function (event, template) {
        event.preventDefault();
    }
});
