
// Schema instance for AvailableCourse
availableCourseSchema = new SimpleSchema({

    name: {
        type: String,
    },
    desription: {
        type: String,
        optional: true
    },
    Duration: {
        type: Number
    },
    createdAt: {
        type: Date
    }
});

Meteor.availableCourses.attachSchema(availableCourseSchema);
