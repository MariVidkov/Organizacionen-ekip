const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    NameOfStudent:{
        type: String,
        required: true,
    },
    ClassOfStudent:{
        type: String,
        required: true,
    },
    NumberOfStudent:{
        type: Number,
        required: true,
    },
    SizeOfShirt:{
        type: String,
        required: true,
    },
});

const student = mongoose.model("student",StudentSchema);
module.exports = student;
