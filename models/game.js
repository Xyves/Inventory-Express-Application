const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  title: { type: String, required: true },
  developer: { type: Schema.ObjectId, ref: "Developer", required: true },
  summary: { type: String, required: true },
  id: { type: String, required: true },
  genre: [{ type: Schema.ObjectId, ref: "Genre" }],
});

// Virtual for this game instance URL.
GameSchema.virtual("url").get(function () {
  return "/catalog/game/" + this._id;
});

// Export model.
module.exports = mongoose.model("Game", GameSchema);
