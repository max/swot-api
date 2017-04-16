const Swot = require('swot-js');

let swotted;

const loadSwot = new Promise((resolve, reject) => {
  const swot = new Swot(_ => {
    resolve(swot);
  });
});

module.exports = (email) => {
  return loadSwot.then(swot => swot.check(email));
}