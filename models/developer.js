const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeveloperSchema = new Schema({
  Name: { type: String, required: true, maxLength: 100 },
});

// Virtual for this author instance URL.
DeveloperSchema.virtual("url").get(function () {
  return "/catalog/author/" + this._id;
});
// Export model.
module.exports = mongoose.model("Author", DeveloperSchema);
