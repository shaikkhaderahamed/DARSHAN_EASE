const Temple = require('../models/Temple');

const getTemples = async (req, res, next) => {
  try {
    let query;

    const reqQuery = { ...req.query };
    const removeFields = ['select', 'sort', 'page', 'limit', 'search'];
    removeFields.forEach(param => delete reqQuery[param]);

    let queryStr = JSON.stringify(reqQuery);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

    query = Temple.find(JSON.parse(queryStr));

    if (req.query.search) {
      const searchRegex = new RegExp(req.query.search, 'i');
      query = query.find({
        $or: [{ name: searchRegex }, { city: searchRegex }, { state: searchRegex }]
      });
    }

    if (req.query.select) {
      const fields = req.query.select.split(',').join(' ');
      query = query.select(fields);
    }

    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }

    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;
    const total = await Temple.countDocuments(query);

    query = query.skip(startIndex).limit(limit);

    const temples = await query;

    const pagination = {};
    if (startIndex + limit < total) {
      pagination.next = { page: page + 1, limit };
    }
    if (startIndex > 0) {
      pagination.prev = { page: page - 1, limit };
    }

    res.status(200).json({ success: true, count: temples.length, pagination, total, data: temples });
  } catch (error) {
    next(error);
  }
};

const getTemple = async (req, res, next) => {
  try {
    const temple = await Temple.findById(req.params.id).populate('organizerId', 'name email');
    if (!temple) {
      const error = new Error('Temple not found');
      error.statusCode = 404;
      return next(error);
    }
    res.status(200).json({ success: true, data: temple });
  } catch (error) {
    next(error);
  }
};

const createTemple = async (req, res, next) => {
  try {
    req.body.organizerId = req.user.id;
    const temple = await Temple.create(req.body);
    res.status(201).json({ success: true, data: temple });
  } catch (error) {
    next(error);
  }
};

const updateTemple = async (req, res, next) => {
  try {
    let temple = await Temple.findById(req.params.id);
    if (!temple) {
      const error = new Error('Temple not found');
      error.statusCode = 404;
      return next(error);
    }
    
    // Only ADMIN or the ORGANIZER who created it can update
    if (temple.organizerId.toString() !== req.user.id && req.user.role !== 'ADMIN') {
      const error = new Error('Not authorized to update this temple');
      error.statusCode = 403;
      return next(error);
    }

    temple = await Temple.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({ success: true, data: temple });
  } catch (error) {
    next(error);
  }
};

const deleteTemple = async (req, res, next) => {
  try {
    const temple = await Temple.findById(req.params.id);
    if (!temple) {
      const error = new Error('Temple not found');
      error.statusCode = 404;
      return next(error);
    }

    if (req.user.role !== 'ADMIN') {
      const error = new Error('Not authorized to delete this temple');
      error.statusCode = 403;
      return next(error);
    }

    await temple.deleteOne();
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};

const toggleTempleStatus = async (req, res, next) => {
  try {
    const temple = await Temple.findById(req.params.id);
    if (!temple) {
      const error = new Error('Temple not found');
      error.statusCode = 404;
      return next(error);
    }
    
    if (req.user.role !== 'ADMIN') {
      const error = new Error('Not authorized to toggle temple status');
      error.statusCode = 403;
      return next(error);
    }

    temple.isActive = !temple.isActive;
    await temple.save();
    res.status(200).json({ success: true, data: temple });
  } catch (error) {
    next(error);
  }
};

module.exports = { getTemples, getTemple, createTemple, updateTemple, deleteTemple, toggleTempleStatus };
