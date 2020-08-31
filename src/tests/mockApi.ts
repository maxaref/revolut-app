
type IMockValue = any;

interface IMock {
  url: string;
  mock: IMockValue;
}

const mocks: IMock[] = [];

(async () => {
  await page.setRequestInterception(true);

  page.on('request', interceptedRequest => {
    const url = interceptedRequest.url();
    const mock = mocks.find(item => url.includes(item.url));
    if (mock) {
      interceptedRequest.respond({
        headers: {'Access-Control-Allow-Origin': '*'},
        body: JSON.stringify(mock.mock),
      });
    } else {
      interceptedRequest.continue();
    }
  });
})();


export const mockApi = async (url: string, mock: IMockValue) => {
  mocks.push({ url, mock });
};