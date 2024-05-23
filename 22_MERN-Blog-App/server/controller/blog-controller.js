const mongoose = require("mongoose");
const Blog = require("../model/Blog");
const { ObjectId } = mongoose.Types;

//Fetch all the blogs
const fetchListOfBlogs = async (req, res) => {
  let blogList;
  try {
    blogList = await Blog.find();
  } catch (e) {
    console.log(e);
  }

  if (!blogList) {
    return res.status(404).json({ message: "No Blogs Found" });
  }

  return res.status(200).json({ blogList });
};

//Add a new blog
const addNewBlog = async (req, res) => {
  const { title, description } = req.body;
  const currentDate = new Date();
  const newBlog = new Blog({
    title,
    description,
    date: currentDate,
  });

  try {
    await newBlog.save();
  } catch (e) {
    console.log(e);
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newBlog.save(session);
    await session.commitTransaction();
  } catch (e) {
    return res.sendStatus(500).json({ message: e });
  }
  return res.status(200).json({ newBlog });
};

//Delete a blog
const deleteBlog = async (req, res) => {
  const id = req.params.id;

  // Validate the id
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const findCurrentBlog = await Blog.findByIdAndDelete(id);
    if (!findCurrentBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    return res.status(200).json({ message: "Successfully deleted" });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "Unable to delete ! Please try again." });
  }
};

//Update a blog
const updateBlog = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  // Validate the id
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  let findUpdatedBlog;
  try {
    findUpdatedBlog = await Blog.findByIdAndUpdate(id, {
      title,
      description,
    });
  } catch (e) {
    console.log(e);
    return res
      .sendStatus(500)
      .json({ message: "Something went wrong..Please try again to update" });
  }
  if (!findUpdatedBlog) {
    return res.sendStatus(500).json({ message: "Unable to update" });
  }
  return res.status(200).json({ message: "Successfully Updated" });
};

module.exports = { fetchListOfBlogs, addNewBlog, deleteBlog, updateBlog };
