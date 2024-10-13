const studentService = require('../services/StudentService');

class StudentController {
  getAll(req, res) {
    const students = studentService.getAllStudents();
    res.json(students);
  }

  getById(req, res) {
    const id = parseInt(req.params.id);
    const student = studentService.getStudentById(id);
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: 'Estudante não encontrado' });
    }
  }

  add(req, res) {
    const newStudent = studentService.addStudent(req.body);
    res.status(201).json(newStudent);
  }

  update(req, res) {
    const id = parseInt(req.params.id);
    const updatedStudent = studentService.updateStudent(id, req.body);
    if (updatedStudent) {
      res.json(updatedStudent);
    } else {
      res.status(404).json({ message: 'Estudante não encontrado' });
    }
  }

  delete(req, res) {
    const id = parseInt(req.params.id);
    studentService.deleteStudent(id);
    res.json({ message: 'Estudante removido com sucesso' });
  }
}

module.exports = new StudentController();
