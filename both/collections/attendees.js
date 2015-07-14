
// Schema instance for Attendee
attendeeSchema = new SimpleSchema({

    user: Object,
    course: Object,
    repositories: [String],
    taskResults: [Object],
    testResults: [Object],
    grades: [Object],
    status: String
});

Meteor.attendees.attachSchema(attendeeSchema);
