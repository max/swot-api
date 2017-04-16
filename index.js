const url = require('url');
const { createError } = require('micro');
const check = require('./lib/check');

module.exports = async (req, res) => {
  const { email } = url.parse(req.url, true).query;

  if (!email) {
    throw createError(400, 'Missing `email` query parameter.');
  }

  const result = await check(email);

  const is_academic = Boolean(result);
  const institution = result || null;

  res.end(JSON.stringify({ email, is_academic, institution }));
};
