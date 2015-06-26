Items = new Mongo.Collection('items');

Items.helpers({

});

Items.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

Schema = {};

Schema.UserProfile = new SimpleSchema({
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

Schema.User = new SimpleSchema({

  emails: {
    type: Array
  },
  'emails.$': {
    type: Object
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },

  profile: {
    type: Schema.UserProfile,
    optional: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  }
});

Schema.User.messages({
  'regEx profile.firstName': 'Only letters allowed between 2 to 25 chars length',
  'regEx profile.lastName': 'Only letters allowed between 2 to 25 chars length',
  'regEx profile.repository': 'Not a valid HTTPS clone URL'
});

Meteor.users.attachSchema(Schema.User);

