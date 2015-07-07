
Template.profile.helpers({
    users: function () {
        return Meteor.users;
    },
    userSchema: function () {
        return Schema.User;
    },
    allItems: function () {
        return Items;
    }
});

var hooksObject = {
    //before: {
    //    // Replace `formType` with the form `type` attribute to which this hook applies
    //    update: function(doc) {
    //        console.log('Hook before update');
    //        return doc;
    //    }
    //},

    // The same as the callbacks you would normally provide when calling
    // collection.insert, collection.update, or Meteor.call
    after: {
        // Replace `formType` with the form `type` attribute to which this hook applies
        update: function(error, result) {
            console.log('Hook after update', error, result);
            return result;
        }
    },

    // Called when form does not have a `type` attribute
    //onSubmit: function(insertDoc, updateDoc, currentDoc) {
    //    console.log('Hook onSubmit');
    //    // You must call this.done()!
    //    //this.done(); // submitted successfully, call onSuccess
    //    //this.done(new Error('foo')); // failed to submit, call onError with the provided error
    //    //this.done(null, "foo"); // submitted successfully, call onSuccess with `result` arg set to "foo"
    //},

    // Called when any submit operation succeeds
    onSuccess: function(formType, result) {
        console.log('Hook onSuccess', formType, result);
    },

    // Called when any submit operation fails
    onError: function(formType, error) {
        console.log('###########################');
        console.log('Hook onError', formType, error);
        console.log('###########################');

        var nc = userSchema.namedContext('updateProfile');
        var er = JSON.parse(error.details)
        nc.addInvalidKeys(er);
        return false;
    },

    // Called every time an insert or typeless form
    // is revalidated, which can be often if keyup
    // validation is used.
    //formToDoc: function(doc) {
    //    // alter doc
    //    // return doc;
    //    console.log('Hook formToDoc');
    //},

    // Called every time an update or typeless form
    // is revalidated, which can be often if keyup
    // validation is used.
    //formToModifier: function(modifier) {
    //    // alter modifier
    //    // return modifier;
    //    console.log('Hook formToModifier');
    //},

    // Called whenever `doc` attribute reactively changes, before values
    // are set in the form fields.
    //docToForm: function(doc, ss) {
    //    console.log('Hook docToForm');
    //},

    // Called at the beginning and end of submission, respectively.
    // This is the place to disable/enable buttons or the form,
    // show/hide a "Please wait" message, etc. If these hooks are
    // not defined, then by default the submit button is disabled
    // during submission.
    //beginSubmit: function() {
    //    console.log('Hook beginSubmit');
    //},
    //endSubmit: function() {
    //    console.log('Hook endSubmit');
    //}
};

AutoForm.hooks({
    updateProfile: hooksObject
});