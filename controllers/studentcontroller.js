const Student = require("../models/Student");

async function addStudent(req, res) {
  try {
    //console.log(req.body, "req.body");
    let student = new Student(req.body);
    await student.save();
    let students = await Student.find({});
    res.render("studentlist", {
      students: students,
    });
   //res.end("<h1> Data has been inserted successfully... </h1>");
  } catch (err) {
    console.log(err);
  }
}

async function getStudents(req, res) {
  try {
    let students = await Student.find({});
    res.render("studentlist", {
      students: students,
    });
  } catch (err) {
    console.log(err.message);
  }
}

async function getPageForEditingStudent(req, res) {
  try {
    let id = req.params.id;
    let student = await Student.findOne({ _id: id });
    //console.log(student);
    res.render("studentforedit", {
      student: student,
    });
  } catch (err) {
    console.log(err);
  }
}

async function editStudent(req, res) {
  try {
    let id = req.params.id; //id of the particular student
    // console.log(req.body, "req.body"); //body of the given object
    let student = await Student.findOne({ _id: id });
    // console.log(student);
    student.rollNo = req.body.rollNo;
    student.firstName = req.body.firstName;
    student.lastName = req.body.lastName;
    student.fatherName = req.body.fatherName;
    student.adharCardNo = req.body.adharCardNo;
    student.mobileNo = req.body.mobileNo;
    await student.save();
    let students = await Student.find({});
    res.render("studentlist", {
      students: students,
    });
    //res.send("<h1>Student details updated successfully...</h1>");
  } catch (err) {
    console.log(err.message, "msg");
  }
}

async function deleteStudent(req, res) {
  try {
    let id = req.params.id;
    console.log(id, "id");
    await Student.deleteOne({ _id: id });
    let students = await Student.find({});
    res.render("studentlist", {
      students: students,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  addStudent,
  getStudents,
  getPageForEditingStudent,
  editStudent,
  deleteStudent,
};
