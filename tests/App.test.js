import { jest } from '@jest/globals'


import puppeteer from 'puppeteer';

jest.setTimeout(30000); // Set Puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:3000'; // Update the base URL for Vite

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should do something', async () => {
    await page.goto(baseUrl);
    // Add test logic for interacting with your Vite application
  });
});
