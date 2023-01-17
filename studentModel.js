const mongoose= require("mongoose")
const Schema = mongoose.Schema

const studentSchema = new Schema({
  name:String,
  gender:String,
  department:String,
  address:String
})
const studentModel = mongoose.model("Student",studentSchema )

module.exports= studentModel