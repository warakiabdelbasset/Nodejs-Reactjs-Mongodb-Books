
const express = require('express');
const router = express.Router();
const Post = require('../moduls/Post');

// Get back all the post

router.get('/',async (req,res)=>{
    try {
        const posts =await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({message : error});
    }
    });
// submit a post

router.post('/',async (req,res)=>{
    const post =new Post({
        title : req.body.title,
        description : req.body.description
    });
    try {
        const savePost = await post.save();
        res.json(savePost)

    } catch (error) {
        res.json({message : error});
    }
 });
// Specific Post
 router.get('/:postId',async (req,res)=>{
     try {
         const post =await Post.findById(req.params.postId);
         res.json(post);
     } catch (err) {
         res.json({message : err});
     }
 })
 //Delete
 router.delete('/:postId',async (req,res)=>{
    try {
        const removePost =await Post.remove({_id:req.params.postId});
        res.json(removePost);
    } catch (err) {
        res.json({message : err});
    }
})
//Update 
router.patch('/:postId',async (req,res)=>{
    try {
        const updatePost =await Post.updateOne({_id:req.params.postId},
            {$set:{title:req.body.title}});
        res.json(updatePost);
    } catch (err) {
        res.json({message : err});
    }
})
module.exports = router;