
// Schema instance for Trainer
trainerSchema = new SimpleSchema({

    user: Object,
    courses: [Object]
});

Meteor.trainers.attachSchema(trainerSchema);
