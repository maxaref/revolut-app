import { ElementHandle } from 'puppeteer';

export const getAttr = (el: ElementHandle<Element> | null, attr: string) => page.evaluate((el, attr) => el[attr], el, attr);