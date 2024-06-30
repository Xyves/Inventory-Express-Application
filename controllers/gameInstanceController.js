const gameInstance = require("../models/gameInstance");
const Game = require("../models/game");

const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

// Display list of all GameInstances.
exports.gameInstance_list = asyncHandler(async (req, res, next) => {
  const allGamesInstances = await gameInstance.find().populate("game").exec();

  res.render("gameinstance_list", {
    title: "Game Instance List",
    gameinstance_list: allGamesInstances,
  });
});

// Display detail page for a specific gameInstance.
exports.gameinstance_detail = asyncHandler(async (req, res, next) => {
  const gameInstance = await gameInstance
    .findById(req.params.id)
    .populate("game")
    .exec();

  if (gameInstance === null) {
    // No results.
    const err = new Error("game copy not found");
    err.status = 404;
    return next(err);
  }

  res.render("gameInstance_detail", {
    title: "Game:",
    gameinstance: gameInstance,
  });
});

// Display gameInstance create form on GET.
exports.gameinstance_create_get = asyncHandler(async (req, res, next) => {
  const allgames = await Game.find({}, "title").sort({ title: 1 }).exec();

  res.render("gameinstance_form", {
    title: "Create gameInstance",
    game_list: allgames,
  });
});

// Handle gameInstance create on POST.
exports.gameinstance_create_post = [
  // Validate and sanitize fields.
  body("game", "game must be specified").trim().isLength({ min: 1 }).escape(),
  body("imprint", "Imprint must be specified")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("status").escape(),
  body("due_back", "Invalid date")
    .optional({ values: "falsy" })
    .isISO8601()
    .toDate(),

  // Process request after validation and sanitization.
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a gameInstance object with escaped and trimmed data.
    const gameInstance = new gameInstance({
      game: req.body.game,
      imprint: req.body.imprint,
      status: req.body.status,
      due_back: req.body.due_back,
    });

    if (!errors.isEmpty()) {
      // There are errors.
      // Render form again with sanitized values and error messages.
      const allGames = await Game.find({}, "title").sort({ title: 1 }).exec();

      res.render("gameinstance_form", {
        title: "Create GameInstance",
        game_list: allGames,
        selected_game: gameInstance.game._id,
        errors: errors.array(),
        gameinstance: gameInstance,
      });
      return;
    } else {
      // Data from form is valid
      await gameInstance.save();
      res.redirect(gameInstance.url);
    }
  }),
];

// Display gameInstance delete form on GET.
exports.gameinstance_delete_get = asyncHandler(async (req, res, next) => {
  const gameInstance = await gameInstance
    .findById(req.params.id)
    .populate("game")
    .exec();

  if (gameInstance === null) {
    // No results.
    res.redirect("/catalog/gameinstances");
  }

  res.render("gameinstance_delete", {
    title: "Delete gameInstance",
    gameinstance: gameInstance,
  });
});

// Handle gameInstance delete on POST.
exports.gameinstance_delete_post = asyncHandler(async (req, res, next) => {
  // Assume valid gameInstance id in field.
  await gameInstance.findByIdAndDelete(req.body.id);
  res.redirect("/catalog/gameinstances");
});

// Display gameInstance update form on GET.
exports.gameinstance_update_get = asyncHandler(async (req, res, next) => {
  // Get game, all games for form (in parallel)
  const [gameInstance, allgames] = await Promise.all([
    gameInstance.findById(req.params.id).populate("game").exec(),
    Game.find(),
  ]);

  if (gameInstance === null) {
    // No results.
    const err = new Error("game copy not found");
    err.status = 404;
    return next(err);
  }

  res.render("gameinstance_form", {
    title: "Update gameInstance",
    game_list: allgames,
    selected_game: gameInstance.game._id,
    gameinstance: gameInstance,
  });
});

// Handle gameInstance update on POST.
exports.gameinstance_update_post = [
  // Validate and sanitize fields.
  body("game", "game must be specified").trim().isLength({ min: 1 }).escape(),
  body("imprint", "Imprint must be specified")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("status").escape(),
  body("due_back", "Invalid date")
    .optional({ values: "falsy" })
    .isISO8601()
    .toDate(),

  // Process request after validation and sanitization.
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a gameInstance object with escaped/trimmed data and current id.
    const gameInstance = new gameInstance({
      game: req.body.game,
      imprint: req.body.imprint,
      status: req.body.status,
      due_back: req.body.due_back,
      _id: req.params.id,
    });

    if (!errors.isEmpty()) {
      // There are errors.
      // Render the form again, passing sanitized values and errors.

      const allgames = await Game.find({}, "title").exec();

      res.render("gameinstance_form", {
        title: "Update gameInstance",
        game_list: allgames,
        selected_game: gameInstance.game._id,
        errors: errors.array(),
        gameinstance: gameInstance,
      });
      return;
    } else {
      // Data from form is valid.
      await gameInstance.findByIdAndUpdate(req.params.id, gameInstance, {});
      // Redirect to detail page.
      res.redirect(gameInstance.url);
    }
  }),
];
