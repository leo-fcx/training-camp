
userProfileSchema = new SimpleSchema({
    firstName: {
        type: String,
        regEx: /^[a-zA-Z-]{2,25}$/
    },
    lastName: {
        type: String,
        regEx: /^[a-zA-Z]{2,25}$/
    },
    repository: {
        type: String,
        label: 'HTTPS clone URL (Git repo)',
        regEx: /(?:https?):(?:\/\/)?[\w\.@:\/~_-]+\.git\/?/
    }
});

userSchema = new SimpleSchema({

    //emails: {
    //  type: Array
    //},
    //'emails.$': {
    //  type: Object
    //},
    //'emails.$.address': {
    //  type: String,
    //  regEx: SimpleSchema.RegEx.Email,
    //},
    //
    //profile: {
    //  type: Schema.UserProfile,
    //  optional: true
    //},
    //services: {
    //  type: Object,
    //  optional: true,
    //  blackbox: true
    //}
    username: {
        type: String,
        regEx: /^[a-z0-9A-Z_]{3,15}$/,
        optional: true
    },
    emails: {
        type: [Object],
        // this must be optional if you also use other login services like facebook,
        // but if you use only accounts-password, then it can be required
        optional: true
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: userProfileSchema,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    }
});

userSchema.messages({
    'regEx profile.firstName': 'Only letters allowed between 2 to 25 chars length',
    'regEx profile.lastName': 'Only letters allowed between 2 to 25 chars length',
    'regEx profile.repository': 'Not a valid HTTPS clone URL'
});

Meteor.users.attachSchema(userSchema);
