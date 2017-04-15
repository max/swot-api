const { createError } = require('micro');
const swot = require('swot-js')();
const url = require('url');

module.exports = (req, res) => {
  const { email } = url.parse(req.url, true).query;

  if (!email) {
    throw createError(400, 'Missing `email` query parameter.');
  }

  const result = swot.check(email);
  const is_academic = Boolean(result);
  const institution = result || null;

  res.end(JSON.stringify({ email, is_academic, institution }));
}