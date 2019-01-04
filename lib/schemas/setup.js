const Joi = require('joi');

module.exports = {
	token: Joi.string().min(10).required(),
	endpoint: Joi.string().uri().optional(),
	language: Joi.string().length(2).allow('en', 'pt').optional()
};
