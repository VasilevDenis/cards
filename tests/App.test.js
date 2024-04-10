/** @type {import('jest')} */
import { chromium } from 'playwright';
import { exec } from 'child_process';

setTimeout(() => {  }, 30000); // default Puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:5173/'; // Assuming Vite server runs on port 3000
  let serverProcess = null;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();

  });

  test('should do something', async () => {
    await page.goto(baseUrl);
    // Add your test logic here
  });
});

