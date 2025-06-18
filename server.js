console.log('server.js iniciado');

const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./database'); // Este archivo lo crearemos ahora

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Esto sirve el HTML y JS al navegador

// Registrar usuario
app.post('/registro', (req, res) => {
  const { nombre, email, password } = req.body;

  if (!nombre || !email || !password) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios.' });
  }

  db.run(
    'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)',
    [nombre, email, password],
    function (err) {
      if (err) {
        return res.status(500).json({ mensaje: 'Error al registrar usuario' });
      }
      res.json({ mensaje: 'Usuario registrado correctamente' });
    }
  );
});

// Obtener usuarios
app.get('/datos', (req, res) => {
  db.all('SELECT * FROM usuarios', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener datos' });
    }
    res.json(rows);
  });
});

// Eliminar usuario
app.delete('/eliminar/:id', (req, res) => {
  const id = req.params.id;
  db.run('DELETE FROM usuarios WHERE id = ?', [id], function (err) {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al eliminar usuario' });
    }
    res.json({ mensaje: 'Usuario eliminado correctamente' });
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
