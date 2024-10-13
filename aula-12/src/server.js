const app = require('./app')
const port = 3333

const studentController = require('./controllers/StudentController');

app.get('/students', studentController.getAll);
app.get('/students/:id', studentController.getById);
app.post('/students', studentController.add);
app.put('/students/:id', studentController.update);
app.delete('/students/:id', studentController.delete);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
