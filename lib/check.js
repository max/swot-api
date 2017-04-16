const Swot = require('swot-js');

const loadSwot = new Promise(resolve => {
  const swot = new Swot(() => {
    resolve(swot);
  });
});

module.exports = email => {
  return loadSwot.then(swot => swot.check(email));
};
