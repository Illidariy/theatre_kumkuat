const router = require('express').Router();
const { Product } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      raw: true,
      order: [['updatedAt', 'DESC']],
    });
    res.status(200).json(products);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post('/', async (req, res) => {
  const { title, body, photo, price, userId } = req.body;
  try {
    const product = await Product.create({
      title,
      body,
      photo,
      price,
      userId,
    });
    res.status(200).json({ product });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, body, photo, price, userId } = req.body;
  try {
    const currentProduct = await Product.findOne({
      where: { id: Number(id) },
    });
    if (currentProduct) {
      currentProduct.title = title;
      currentProduct.body = body;
      currentProduct.photo = photo;
      currentProduct.price = price;
      currentProduct.userId = userId;
      const newProduct = await currentProduct.save();
      return res.status(200).json({ product: newProduct });
    }
    return res.json({ message: 'Product undefined' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
  return res.json({});
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Product.destroy({
      where: { id: Number(id) },
    });
    if (deleted > 0) {
      return res.status(200).json({ message: 'fulfilled' });
    }
    res.status(500).json({ message: 'rejected' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
  return res.json({});
});

module.exports = router;
