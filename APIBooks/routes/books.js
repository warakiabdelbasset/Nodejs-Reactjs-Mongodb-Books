
const express = require('express');
const Books = require('../moduls/Books');
const router = express.Router();
const multer = require('multer');

// Get back all the books

router.get('/',async (req,res)=>{
    try {
        const books =await Books.find();
        res.json(books);
    } catch (error) {
        res.json({message : error});
    }
    });
// submit a books

router.post('/',async (req,res)=>{
    
    const postbooks =new Books({
        Author : req.body.Author,
        Title : req.body.Title,
        Series_Title : req.body.Series_Title,
        Language : req.body.Language,
        Subject : req.body.Subject,
        Category : req.body.Category,
        Release_Date : req.body.Release_Date,
        Copyright_Status : req.body.Copyright_Status,
        read_url : req.body.read_url,
        image_url : req.body.image_url
    });
    try {
        const saveBooks = await postbooks.save();
        res.json(saveBooks)

    } catch (error) {
        res.json({message : error});
    }
 });
// Specific books
 router.get('/:postId',async (req,res)=>{
     try {
         const books =await Books.findById(req.params.postId);
         res.json(books);
     } catch (err) {
         res.json({message : err});
     }
 })
 //Delete
 router.delete('/:postId',async (req,res)=>{
    try {
        const removebooks =await Books.remove({_id:req.params.postId});
        res.json(removebooks);
    } catch (err) {
        res.json({message : err});
    }
})
//Update 
router.patch('/:postId',async (req,res)=>{
    try {
        const updateBooks =await Books.updateOne({_id:req.params.postId},
            {$set:{title:req.body.title}});
        res.json(updateBooks);
    } catch (err) {
        res.json({message : err});
    }
})
module.exports = router;