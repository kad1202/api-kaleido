const typeString = { type: 'string' };

const getBalenceSchema = {
  response: {
    200: {
      type: 'object',
      items: typeString,
    },
  },
};

module.exports = {
  getBalenceSchema,
};
