const express = require('express');
const path = require('path');
const { getParticipantes } = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde el frontend
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/api/participantes', async (req, res) => {
  try {
    const participantes = await getParticipantes();
    res.json(participantes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los participantes' });
  }
});

// Redirigir a index.html si se accede a la raíz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


