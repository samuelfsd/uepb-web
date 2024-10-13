const Student = require('../models/studentModel')
const repository = require('../repositories/StudentRepository')

class StudentService {
  getAllStudents() {
    return repository.getAll();
  }
  getStudentById(id) {
    return repository.getById(id);
  }
  addStudent(data) {
    const {name, course, enrollment} = data
    const newStudent = new Student(null, name, course, enrollment);
    return repository.create(newStudent)
  }
  updateStudent(id, data) {
    return repository.update(id, data)
  }
  deleteStudent(id) {
    return repository.delete(id)
  }
}

module.exports = new StudentService()