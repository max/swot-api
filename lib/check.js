const Swot = require('swot-js');

module.exports = (email) => {
  return new Promise((resolve, reject) => {
    const swot = Swot(_ => {
      resolve(swot.check(email));
    });
  });
}