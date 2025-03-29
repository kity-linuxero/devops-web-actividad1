const express = require('express');
const { getParticipantes } = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/participantes', async (req, res) => {
  try {
    const participantes = await getParticipantes();
    res.json(participantes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los participantes' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


