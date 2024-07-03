const express = require("express");
const router = express.Router();

// Require controller modules.
const game_controller = require("../controllers/gameController");
const developer_controller = require("../controllers/developerController");
const genre_controller = require("../controllers/genreController");
const game_instance_controller = require("../controllers/gameInstanceController");

/// game ROUTES ///

// GET catalog home page.
router.get("/", game_controller.index);

// // GET request for creating a game.
// router.get("/game/create", game_controller.game_create_get);

// // POST request for creating game.
// router.post("/game/create", game_controller.game_create_post);

// // GET request to delete game.
// router.get("/game/:id/delete", game_controller.game_delete_get);

// // POST request to delete game.
// router.post("/game/:id/delete", game_controller.game_delete_post);

// // GET request to update game.
// router.get("/game/:id/update", game_controller.game_update_get);

// // POST request to update game.
// router.post("/game/:id/update", game_controller.game_update_post);

// // GET request for one game.
// router.get("/game/:id", game_controller.game_detail);

// // GET request for list of all game items.
// router.get("/games", game_controller.game_list);

// /// developer ROUTES ///

// // GET request for creating developer. NOTE This must come before route for id (i.e. display developer).
// router.get("/developer/create", developer_controller.developer_create_get);

// // POST request for creating developer.
// router.post("/developer/create", developer_controller.developer_create_post);

// // GET request to delete developer.
// router.get("/developer/:id/delete", developer_controller.developer_delete_get);

// // POST request to delete developer.
// router.post(
//   "/developer/:id/delete",
//   developer_controller.developer_delete_post
// );

// // GET request to update developer.
// router.get("/developer/:id/update", developer_controller.developer_update_get);

// // POST request to update developer.
// router.post(
//   "/developer/:id/update",
//   developer_controller.developer_update_post
// );

// // GET request for one developer.
// router.get("/developer/:id", developer_controller.developer_detail);

// // GET request for list of all developers.
// router.get("/developers", developer_controller.developer_list);

// /// GENRE ROUTES ///

// // GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
// router.get("/genre/create", genre_controller.genre_create_get);

// //POST request for creating Genre.
// router.post("/genre/create", genre_controller.genre_create_post);

// // GET request to delete Genre.
// router.get("/genre/:id/delete", genre_controller.genre_delete_get);

// // POST request to delete Genre.
// router.post("/genre/:id/delete", genre_controller.genre_delete_post);

// // GET request to update Genre.
// router.get("/genre/:id/update", genre_controller.genre_update_get);

// // POST request to update Genre.
// router.post("/genre/:id/update", genre_controller.genre_update_post);

// // GET request for one Genre.
// router.get("/genre/:id", genre_controller.genre_detail);

// // GET request for list of all Genre.
// router.get("/genres", genre_controller.genre_list);

// /// gameINSTANCE ROUTES ///

// // GET request for creating a gameInstance. NOTE This must come before route that displays gameInstance (uses id).
// router.get(
//   "/gameinstance/create",
//   game_instance_controller.gameinstance_create_get
// );

// // POST request for creating gameInstance.
// router.post(
//   "/gameinstance/create",
//   game_instance_controller.gameinstance_create_post
// );

// // GET request to delete gameInstance.
// router.get(
//   "/gameinstance/:id/delete",
//   game_instance_controller.gameinstance_delete_get
// );

// // POST request to delete gameInstance.
// router.post(
//   "/gameinstance/:id/delete",
//   game_instance_controller.gameinstance_delete_post
// );

// // GET request to update gameInstance.
// router.get(
//   "/gameinstance/:id/update",
//   game_instance_controller.gameinstance_update_get
// );

// // POST request to update gameInstance.
// router.post(
//   "/gameinstance/:id/update",
//   game_instance_controller.gameinstance_update_post
// );

// // GET request for one gameInstance.
// router.get("/gameinstance/:id", game_instance_controller.gameinstance_detail);

// // GET request for list of all gameInstance.
// router.get("/gameinstances", game_instance_controller.gameinstance_list);

module.exports = router;
