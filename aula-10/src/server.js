const app = require('./app');

app.listen(3001, () => console.log('server running on port 3001'));

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));