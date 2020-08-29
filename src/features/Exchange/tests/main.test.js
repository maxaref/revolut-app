const { getAttr } = require('/tests/utils');
const { mockApi } = require('/tests/mockApi');
const openExchangeMock = require('./openExchangeMock');

const timeout = 10000;


const fromSelector = '.carousel-root:nth-of-type(1)';
const fromSelectedSelector = `${fromSelector} .slide.selected`;
const toSelector = '.carousel-root:nth-of-type(2)';
const toSelectedSelector = `${toSelector} .slide.selected`;
const getButtonNumberSelector = (type, num) => `${type === 'from' ? fromSelector : toSelector} .control-dots li:nth-of-type(${num})`;


const getCurrencyFrom = () => page.$(`${fromSelectedSelector} .tests__currency`);
const getCurrencyTo = () => page.$(`${toSelectedSelector} .tests__currency`);
const getMoneyFrom = () => page.$(`${fromSelectedSelector} .tests__balance`);
const getMoneyTo = () => page.$(`${toSelectedSelector} .tests__balance`);
const getResult = () => page.$('.tests__result');
const getRatio = () => page.$('.tests__ratio');

beforeAll(async () => {
  mockApi('openexchangerates.org/api/latest.json', openExchangeMock);

  await page.goto(URL, { waitUntil: 'domcontentloaded' });
});

const blance = {
  EUR: 0,
  GBP: 100,
  USD: 0,
};

describe('Test Exchange', () => {
  test('Currencies, balance and ratio', async () => {
    await page.click(getButtonNumberSelector('from', 3));
    await page.click(getButtonNumberSelector('to', 2));

    await page.waitFor(500);

    const currencyFrom = await getCurrencyFrom().then(el => getAttr(el, 'textContent'));
    const currencyTo = await getCurrencyTo().then(el => getAttr(el, 'textContent'));
    const moneyFrom = await getMoneyFrom().then(el => getAttr(el, 'textContent'));
    const moneyTo = await getMoneyTo().then(el => getAttr(el, 'textContent'));
    const ratio = await getRatio().then(el => getAttr(el, 'textContent'));
    

    expect(currencyFrom).toBe('GBP');
    expect(currencyTo).toBe('EUR');
    expect(moneyFrom).toBe(blance.GBP.toString());
    expect(moneyTo).toBe(blance.EUR.toString());
    expect(ratio).toBe('0.89');
  }, timeout);

  test('Disabled button', async () => {
    const isDisabled = await page.$('.tests__exchangeButton').then(el => getAttr(el, 'disabled'));

    expect(isDisabled).toBe(true);
  }, timeout);

  test('Titles math', async () => {
    await page.type('input', '30');

    const result1 = await getResult().then(el => getAttr(el, 'textContent'));
    expect(result1).toBe('+33.64');

    await page.click(getButtonNumberSelector('to', 1));

    await page.waitFor(500);
        
    const result2 = await getResult().then(el => getAttr(el, 'textContent'));
    expect(result2).toBe('+40.05');
  }, timeout);

  test('Not disabled button', async () => {
    const isDisabled = await page.$('.tests__exchangeButton').then(el => getAttr(el, 'disabled'));

    expect(isDisabled).toBe(false);
  }, timeout);

  test('Exchange', async () => {
    await page.click('.tests__exchangeButton');

    blance.GBP -= 30;
    blance.USD += 40.05;

    const moneyFrom = await getMoneyFrom().then(el => getAttr(el, 'textContent'));
    const moneyTo = await getMoneyTo().then(el => getAttr(el, 'textContent'));
    const inputValue = await page.$('input').then(el => getAttr(el, 'value'));

    expect(moneyFrom).toBe(blance.GBP.toString());
    expect(moneyTo).toBe(blance.USD.toString());
    expect(inputValue).toBe('');
  }, timeout);

  test('Disabled button', async () => {
    const isDisabled = await page.$('.tests__exchangeButton').then(el => getAttr(el, 'disabled'));

    expect(isDisabled).toBe(true);
  }, timeout);

  test('Balances after exchange', async () => {
    await page.click(getButtonNumberSelector('from', 1));
    await page.click(getButtonNumberSelector('to', 3));

    await page.waitFor(500);

    const moneyFrom = await getMoneyFrom().then(el => getAttr(el, 'textContent'));
    const moneyTo = await getMoneyTo().then(el => getAttr(el, 'textContent'));

    expect(moneyFrom).toBe(blance.USD.toString());
    expect(moneyTo).toBe(blance.GBP.toString());
  }, timeout);
});