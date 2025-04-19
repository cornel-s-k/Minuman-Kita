const express = require('express');
const cors = require('cors'); // ✅ Tambahkan ini
const drinkRoutes = require('./routes/drinkRoutes');
const db = require('./db');

const app = express();

// ✅ Middleware
app.use(cors()); // ✅ Tambahkan ini biar frontend bisa akses
app.use(express.json());

// ✅ Routes
app.use('/api/drinks', drinkRoutes);

// ✅ Start server
app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});

