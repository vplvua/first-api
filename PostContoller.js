import Post from "./Post.js";
import PostService from "./PostService.js";

class PostController {
  async create(req, res) {
    try {
      console.log(req);
      const post = await PostService.create(req.body);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  async getByID(req, res) {
    try {
      const post = await PostService.getByID(req.params.id);
      return res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req.body);
      res.status(200).json(updatedPost);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  async delete(req, res) {
    try {
      const post = await PostService.delete(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

export default new PostController();
