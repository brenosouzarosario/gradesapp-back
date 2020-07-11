export default (moongose) => {
    const schema = moongose.Schema({
        name: { type: String, required: true },
        subject: { type: String, required: true },
        type: { type: String, required: true },
        value: { type: String, required: true },
        lastModified: { type: Date, default: Date.now },
    });

    schema.method('toJSON', function() {
        const { __v, _id, ...object } = this.toObject();

        object.id = _id;

        return object;
    });

    const Grade = moongose.model('grades', schema, 'grades');

    return Grade;
};