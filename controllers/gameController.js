const Game = require("../models/game");
const Developer = require("../models/developer");
const Genre = require("../models/genre");
const GameInstance = require("../models/gameInstance");

const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  // Get details of games, game instances, developers and genre counts (in parallel)
  const [
    numGames,
    numGameInstances,
    numAvailableGameInstances,
    numDevelopers,
    numGenres,
  ] = await Promise.all([
    Game.countDocuments({}).exec(),
    GameInstance.countDocuments({}).exec(),
    GameInstance.countDocuments({ status: "Available" }).exec(),
    Developer.countDocuments({}).exec(),
    Genre.countDocuments({}).exec(),
  ]);

  res.render("index", {
    title: "Local game shop",
    game_count: numGames,
    game_instance_count: numGameInstances,
    game_instance_available_count: numAvailableGameInstances,
    developer_count: numDevelopers,
    genre_count: numGenres,
  });
});

// Display list of all Games.
exports.game_list = asyncHandler(async (req, res, next) => {
  const allGames = await Game.find({}, "title developer")
    .sort({ title: 1 })
    .populate("developer")
    .exec();

  res.render("game_list", { title: "Game List", game_list: allGames });
});
