require('dotenv').config();

require('./config/database').connect();
const Product = require('./models/product');

const jsonProducts = require('./products.json');

const populate = async () => {
  try {
    await Product.deleteMany();
    await Product.create(jsonProducts);
    process.exit(0);
  } catch (error) {
    return next(new Error(error.message));
  }
};

populate();
