module.exports = (req, res, next) => {
    const { name, price } = req.body;
    if (!name || price <= 0) {
      return res.status(400).json({ error: 'Invalid input' });
    }
    next();
  };
  