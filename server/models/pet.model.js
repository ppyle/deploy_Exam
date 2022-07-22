const mongoose = require("mongoose")

const PetSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "bruh your pet needs a name"],
        minLength: [3, "bruh aint no name less than 3 characters bruh"]
    },
    type : {
        type: String,
        required: [true, "bruh you dont even know what it is?"],
        minLength: [3, "bruh aint no type less than 3 characters bruh"]
    },
    description : {
        type: String,
        required: [true, "broooo but like is it cool?"],
        minLength: [3, "bruh aint no description less than 3 characters bruh"]
    },
    skill_1 : {
        type: String,
    },
    skill_2 : {
        type: String,
    },
    skill_3 : {
        type: String,
    },
},
{timestamps: true}
)

const Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;