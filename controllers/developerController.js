const Developer = require("../models/developer");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.developer_list = asyncHandler(async (req, res, next) => {
  const allDevelopers = await Developer.find().sort({ first_name: 1 }).exec();
  allDevelopers
    .find()
    .sort([["name", "ascending"]])
    .exec(function (err, list_developers) {
      if (err) {
        return next(err);
      }
      //Successful, then render
      res.render("developer_list", {
        title: "Developer List",
        developer_list: allDevelopers,
      });
    });
});
exports.developer_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: developer detail: ${req.params.id}`);
});
exports.developer_create_get = asyncHandler(async (req, res, next) => {
  res.render("./developer/developer_form", {
    title: "Add Developer",
    developer: undefined,
    errors: undefined,
  });
});

// Display developer create form on GET.
exports.developer_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: developer create GET");
});

// Handle developer create on POST.
exports.developer_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: developer create POST");
});

// Display developer delete form on GET.
exports.developer_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: developer delete GET");
});

// Handle developer delete on POST.
exports.developer_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: developer delete POST");
});

// Display developer update form on GET.
exports.developer_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: developer update GET");
});

// Handle developer update on POST.
exports.developer_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: developer update POST");
});
