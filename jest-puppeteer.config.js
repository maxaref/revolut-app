module.exports = {
  launch: {
    headless: !process.env.DEBUG,
    slowMo: process.env.DEBUG ? 100 : 0,
    devtools: true
  }
};