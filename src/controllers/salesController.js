// src/controllers/salesController.js

const pool = require('../../config/database');  // Adjust the path if needed

exports.getAllSales = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM sales ORDER BY id ASC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching sales:', error);
    res.status(500).json({ message: 'Server error fetching sales' });
  }
};

exports.getSaleById = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const result = await pool.query('SELECT * FROM sales WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching sale:', error);
    res.status(500).json({ message: 'Server error fetching sale' });
  }
};

exports.createSale = async (req, res) => {
  const { productId, quantity } = req.body;
  const date = new Date().toISOString().split('T')[0]; // Current date in 'YYYY-MM-DD'

  try {
    const result = await pool.query(
      'INSERT INTO sales (product_id, quantity, date) VALUES ($1, $2, $3) RETURNING *',
      [productId, quantity, date]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating sale:', error);
    res.status(500).json({ message: 'Server error creating sale' });
  }
};

exports.updateSale = async (req, res) => {
  const id = parseInt(req.params.id);
  const { productId, quantity, date } = req.body;

  try {
    const existing = await pool.query('SELECT * FROM sales WHERE id = $1', [id]);
    if (existing.rows.length === 0) {
      return res.status(404).json({ message: 'Sale not found' });
    }

    const result = await pool.query(
      'UPDATE sales SET product_id = $1, quantity = $2, date = $3 WHERE id = $4 RETURNING *',
      [
        productId || existing.rows[0].product_id,
        quantity || existing.rows[0].quantity,
        date || existing.rows[0].date,
        id,
      ]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating sale:', error);
    res.status(500).json({ message: 'Server error updating sale' });
  }
};

exports.deleteSale = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const result = await pool.query('DELETE FROM sales WHERE id = $1 RETURNING *', [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    res.status(204).send(); // No Content
  } catch (error) {
    console.error('Error deleting sale:', error);
    res.status(500).json({ message: 'Server error deleting sale' });
  }
};
