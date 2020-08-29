

const mocks = [];

(async () => {
  await page.setRequestInterception(true);

  page.on('request', interceptedRequest => {
    const url = interceptedRequest.url();
    const mock = mocks.some(item => url.includes(item));
    if (mock) {
      interceptedRequest.respond({
        content: 'application/json',
        headers: {'Access-Control-Allow-Origin': '*'},
        body: JSON.stringify(mock.mock),
      });
    } else {
      interceptedRequest.continue();
    }
  });
})();

module.exports = {
  mockApi: async (url, mock) => {
    mocks.push({ url, mock });
  }
};