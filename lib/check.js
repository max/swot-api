const Swot = require('swot-js');

let swotted;

module.exports = (email) => {
  return new Promise((resolve, reject) => {
    if (swotted) {
      return resolve(swotted.check(email));
    } 

    const swot = Swot(_ => {
      swotted = swot;
      resolve(swotted.check(email));
    });
  });
}