const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    statement: { type: String, required: true },
}, {
    timestamps: true,
});

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;