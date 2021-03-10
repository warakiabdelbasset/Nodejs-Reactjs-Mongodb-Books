const mongoose = require('mongoose');

const BooksSchema = mongoose.Schema({
// how the database is structed
    Author:{
        type: String,
        required:true

    },
    Title:{
        type: String,
        required:true

    },
    Series_Title:{
        type: String,
        required:true

    },
    Language:{
        type: String,
        required:true

    },
    Subject:{
        type: String,
        required:true

    },
    Category:{
        type: String,
        required:true

    },
    Release_Date:{
        type: String,
        required:true

    },
    Copyright_Status:{
        type: String,
        required:true

    },
    read_url:{
        type: String,
        required:true

    },
    image_url:{
        type:   String,
        required:true
        
    },
    date:{
        type: Date,
        default: Date.now
        
    }
});
module.exports = mongoose.model('Books',BooksSchema);