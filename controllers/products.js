const Product = require('../models/product');

exports.getAllProducts = async (req, res, next) => {
  try {
    const { featured, company, name, sort, fields } = req.query;
    const queryObj = {};

    if (featured) {
      queryObj.featured = featured === 'true' ? true : false;
    }

    if (company) {
      queryObj.company = company;
    }

    if (name) {
      queryObj.name = { $regex: name, $options: 'i' };
    }

    let result = Product.find(queryObj);

    if (sort) {
      const sortList = sort.split(',').join(' ');
      result = result.sort(sortList);
    } else {
      result = result.sort('createdAt');
    }

    if (fields) {
      const fieldList = fields.split(',').join(' ');
      result = result.select(fieldList);
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);

    const products = await result;

    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    return next(new Error(error.message));
  }
};
