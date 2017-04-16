const Swot = require('swot-js');

let swot;

module.exports = (email) => {
  return new Promise((resolve, reject) => {
    if (swot) return resolve(swot.check(email));

    swot = Swot(_ => {
      resolve(swot.check(email));
    });
  });
}