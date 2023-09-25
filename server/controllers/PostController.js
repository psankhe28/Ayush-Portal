const { Post } = require("../models/Post");
const axios = require("axios");

exports.createPost = async (req, res, next) => {
  try {
    const { title, image, text, userId } = req.body;
    console.log(req.body);
    const createPostData = await Post.create({
      title,
      text,
      photoUrl: image,
      poster: userId,
    });

    res.status(201).json({ data: createPostData, message: "created" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// exports.getAllPosts = async (req, res) => {
//   try {
//     const posts = await Post.find()
//       .populate({ path: "comments", populate: { path: "user" } })
//       .populate("poster")
//       .exec();
//     res.status(200).json({ data: posts, message: "All posts" });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// };

exports.getAllPosts = async (req, res) => {
  try {
      const posts = await Post.find();
      res.status(200).json({ data: posts, message: 'All posts' });
  } catch (error) {
      return res.status(500).json({ error: error.message });
  }
}

