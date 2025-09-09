require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db'); // <-- correct path

const productRoutes = require('./src/routes/products');
const errorHandler = require('./src/middleware/error');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' })); // for image uploads
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/api/products', productRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
