  
const mongoose = require('mongoose');
const slugify = require('slugify');
const Schema = mongoose.Schema;

//Schema for works
const WorkSchema =new Schema({
    name : {
        type : String,
        unique: true,
        required: true
    },
    description: {
        type : String,
        unique: true,
        trim: true
    },
    image: {
        type : String,
        required : true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    slug: {
        type: String,
        unique: true
    }
})

WorkSchema.pre('validate', function(next){
    this.slug = slugify(this.name, {
      lower:true,
      strict:true
    })
    next();
})

const Work = mongoose.model('Work', WorkSchema);
module.exports = Work;