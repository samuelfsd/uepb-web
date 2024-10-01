const app = require('./app');

app.listen(3333, () => console.log('server running on port 3333'));

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));