Items = new Mongo.Collection('items');

Items.helpers({});

Items.before.insert(function (userId, doc) {
    doc.createdAt = moment().toDate();
});

itemSchema = new SimpleSchema({
    name: {
        type: String
    },
    rating: {
        type: Number
    }
});

Items.attachSchema(itemSchema);
