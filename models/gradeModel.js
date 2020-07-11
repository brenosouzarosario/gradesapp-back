export default (moongose) => {
    const schema = moongose.schema({
        name: { type: String, required: true },
        subject: { type: String, required: true },
        type: { type: String, required: true },
        value: { type: String, required: true },
        lastModified: { type: Date, default: Date.now },
    });

    const Grade = moongose.model('grades', schema, 'grades');

    return Grade;
};