const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const studentModel = require("./models/student");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://TestUser:6666@crud.ilotk.mongodb.net/student?retryWrites=true&w=majority",
 { 
    useNewUrlParser: true,
}
);


app.post("/insert", async (req, res) => {
    const NameOfStudent = req.body.NameOfStudent
    const ClassOfStudent = req.body.ClassOfStudent
    const NumberOfStudent = req.body.NumberOfStudent
    const SizeOfShirt = req.body.SizeOfShirt
    const student = new studentModel({NameOfStudent: NameOfStudent,ClassOfStudent:ClassOfStudent, NumberOfStudent:NumberOfStudent, SizeOfShirt:SizeOfShirt });
    try {
        await student.save();
        res.send("inserted data");
    } catch(err){
        console.log(err);
    }

});

app.get("/read", async (req, res) => {
    studentModel.find({},(err, result) => {
        if (err){
            res.send(err)
        }
        res.send(result);
    })

});

app.put("/update", async (req, res) => {
    const newName = req.body.newName
    const id = req.body.id;

 
    try {
        await studentModel.findById(id, (err, updatedName)=> {
            updatedName.NameOfStudent = newName;
            updatedName.save(); 
            res.send("update");
        })
    } catch(err){
        console.log(err);
    }

});

app.delete("/delete/:id", async(req, res)=>{
const id = req.params.id;
await studentModel.findByIdAndRemove(id).exec();
res.send("deleted");
})

app.listen(3001, () => {
    console.log("Server running on port 3001...");
});
