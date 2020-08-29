

module.exports = {
  getAttr: (el, attr) => page.evaluate((el, attr) => el[attr], el, attr),
};