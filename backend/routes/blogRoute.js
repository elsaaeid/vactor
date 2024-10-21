const express = require("express");
const router = express.Router();

const {
  protect
} = require("./authMiddleware");
const {
  createBlog,
  getBlogs,
  getBlog,
  deleteBlog,
  updateBlog,
  likeBlog,
  unLikeBlog,
  commentBlog,
} = require("../controllers/blogController");


const { upload } = require("../utils/fileUpload");

router.post("/", protect, upload.single("image"), createBlog);
router.patch("/:id", protect, upload.single("image"), updateBlog);
router.delete("/:id", protect, deleteBlog);
router.get("/", getBlogs);
router.get("/:id", getBlog);
router.post('/:id', likeBlog);
router.post('/:id', unLikeBlog);
router.post('/:id', commentBlog);


module.exports = router;
