const Student = require('../models/studentModel')

let students = [
  new Student(1, 'João', 'Computação', '2323123'),
  new Student(2, 'Maria', 'Física', '323123'),
]

class StudentRepository {
  getAll() {
    return students;
  }

  getById(id) {
    return students.find(student => student.id === id)
  }
  create(student) {
    student.id = students.length + 1
    students.push(student)
    return student;
  }
  update(id, updatedStudent) {
    const index = students.findIndex(student => student.id === id)
    if (index !== -1) {
      students[index] = {...students[index], ...updatedStudent}
      return students[index]
    }
    return null
  }

  delete(id) {
    students = students.filter(student => student.id !== id)
    return true
  }
}

module.exports = new StudentRepository()