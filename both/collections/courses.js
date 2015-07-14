
// Schema instance for Course
courseSchema = new SimpleSchema({

    availableCourse: {
        type: availableCourseSchema,
    },
    start: {
        type: Date
    },
    end: {
        type: Date
    },
    lessons: {
        type: [Object]
    },
    tasks: {
        type: [Object]
    },
    tests: {
        type: [Object]
    },
    trainer: {
        type: Object
    },
    attendees: {
        type: [Object]
    },

});

Meteor.courses.attachSchema(courseSchema);
