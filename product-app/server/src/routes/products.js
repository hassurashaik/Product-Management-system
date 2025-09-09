const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /api/products?sort=price&order=asc&search=...
router.get('/', async (req, res, next) => {
  try {
    const { sort = 'price', order = 'asc', search = '' } = req.query;
    const filter = search ? { name: { $regex: search, $options: 'i' } } : {};
    const sortObj = { [sort]: order === 'desc' ? -1 : 1 };
    const products = await Product.find(filter).sort(sortObj);
    res.json(products);
  } catch (err) { next(err); }
});

// POST /api/products
// POST /api/products
router.post('/', async (req, res, next) => {
  try {
    const { name, price, description, category, image } = req.body; // <-- added image
    if (!name || price == null) 
      return res.status(400).json({ message: 'Name and price required' });

    const p = new Product({ name, price, description, category, image }); // <-- save image
    await p.save();
    res.status(201).json(p);
  } catch (err) { 
    next(err); 
  }
});


// PUT /api/products/:id
// PUT /api/products/:id
router.put('/:id', async (req, res, next) => {
  try {
    const { name, price, description, category, image } = req.body; // <-- include image
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, description, category, image }, // <-- update image
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: 'Product not found' });
    res.json(updated);
  } catch (err) { 
    next(err); 
  }
});


// DELETE /api/products/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Deleted', id: req.params.id });
  } catch (err) { next(err); }
});

module.exports = router;
