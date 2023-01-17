const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const studentModel =require("./studentModel")

const app = express();
// controllers
const handlePostController = (req, res) => {
const {name, gender, department,address}=req.body
const newStudent = new studentModel({ name, gender, department, address });
newStudent.save().then((student)=>{
  res.send({  message: "student created successfully", data: newStudent });

}).catch
(err=>{console.log(err)})

};
const handleGetController=(req, res)=>{
  studentModel.find().then(students=>{res.json({message:"all students",data:students})}).catch(err=>{
  console.log(err);
})
}

// middleware
app.use(bodyParser.json());
// routes
app.get("/students", handleGetController);
app.post("/student", handlePostController);

mongoose.set("strictQuery", false);
mongoose
	.connect(
		"mongodb+srv://nana:Wdb6j6YiQcXwkOcK@cluster0.xkraupr.mongodb.net/studentsDB?retryWrites=true&w=majority"
	)
	.then((result) => {
		app.listen(5000, () => {
			console.log("server is ready");
		});
	})
	.catch((err) => {
		console.log(err);
	});
