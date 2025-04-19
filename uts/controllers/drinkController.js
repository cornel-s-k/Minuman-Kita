const db = require('../db');

// GET all drinks
exports.getAllDrinks = (req, res) => {
  db.query('SELECT * FROM drinks', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// POST new drink
exports.addDrink = (req, res) => {
  const { name, type, price } = req.body;
  const sql = 'INSERT INTO drinks (name, type, price) VALUES (?, ?, ?)';
  db.query(sql, [name, type, price], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Drink added!', id: result.insertId });
  });
};

// GET one drink
exports.getDrink = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM drinks WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
};

// PUT update drink
exports.updateDrink = (req, res) => {
  const { id } = req.params;
  const { name, type, price } = req.body;
  db.query(
    'UPDATE drinks SET name = ?, type = ?, price = ? WHERE id = ?',
    [name, type, price, id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Drink updated!' });
    }
  );
};

// DELETE drink
exports.deleteDrink = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM drinks WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Drink deleted!' });
  });
};
