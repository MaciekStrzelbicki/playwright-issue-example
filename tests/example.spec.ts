import { chromium, test as baseTest } from "@playwright/test";

const test = baseTest.extend({
  browser: async ({}, use) => {
    const browser = await chromium.launch();
    // const browser = await firefox.launch();
    await use(browser);
    await browser.close();
  },
  context: async ({ browser }, use) => {
    const context = await browser.newContext({
      recordVideo: {
        dir: "video/",
      },
    });
    await use(context);
    await context.close();
  },
  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
    await page.close();
  },
});

test("has title", async ({ page }) => {
  await page.goto("https://SSOprotectedWebsite.com");
  await page.waitForLoadState();
});
