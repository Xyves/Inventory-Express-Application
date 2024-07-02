const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GameInstanceSchema = new Schema({
  game: { type: Schema.ObjectId, ref: "Game", required: true }, // Reference to the associated Game.
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Unavailable"],
    default: "Available",
  },
});

// Virtual for this Gameinstance object's URL.
GameInstanceSchema.virtual("url").get(function () {
  return "/catalog/Gameinstance/" + this._id;
});

// Export model.
module.exports = mongoose.model("GameInstance", GameInstanceSchema);
