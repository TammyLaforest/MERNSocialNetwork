const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Post Input Validation
const validatePostInput = require("../../validation/post");

// Load models
const Post = require("../../models/Post");

// @route   POST api/posts/test
// @desc    Create post
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    if (!isValid) {
      // Return errors with 400 status
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      user: req.user.id,
      name: req.body.name,
      avatar: req.body.avatar,
      text: req.body.text
    });
    // Save post
    newPost.save().then(post => res.json(post));
  }
);

module.exports = router;
