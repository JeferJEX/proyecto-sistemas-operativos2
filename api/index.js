const express = require("express");
const app = express();

app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
  res.send("API funcionando en Node.js + Express 🚀");
});

// Endpoint de prueba
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Servidor activo",
    time: new Date()
  });
});

// Ejemplo de API REST
app.get("/api/saludo", (req, res) => {
  res.json({
    mensaje: "Hola desde tu API en Express"
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
