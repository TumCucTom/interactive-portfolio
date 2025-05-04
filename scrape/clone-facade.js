const playwright = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  // Base URL of the site to clone
  const baseUrl = 'https://media-facade.shiftlink.tech';
  // Directory where files will be saved
  const outputDir = path.resolve(__dirname, '../site');

  // Make sure output directory exists
  await fs.promises.mkdir(outputDir, { recursive: true });

  // Launch browser
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Intercept all responses and save assets
  context.on('response', async (response) => {
    try {
      const url = response.url();
      if (!url.startsWith(baseUrl)) return;

      // Determine resource type
      const resourceType = response.request().resourceType();
      const allowedTypes = ['document', 'stylesheet', 'script', 'image', 'font', 'xhr', 'fetch'];
      if (!allowedTypes.includes(resourceType)) return;

      // Read response body
      const buffer = await response.body();

      // Determine local file path
      let relativePath = new URL(url).pathname;
      if (relativePath.endsWith('/')) {
        relativePath += 'index.html';
      }
      const localPath = path.join(outputDir, relativePath);

      // Ensure directory exists
      await fs.promises.mkdir(path.dirname(localPath), { recursive: true });

      // Write file
      await fs.promises.writeFile(localPath, buffer);
      console.log(`Saved: ${localPath}`);
    } catch (err) {
      console.error(`Failed to save resource: ${response.url()}`, err);
    }
  });

  // Navigate and wait for network to be idle
  await page.goto(baseUrl, { waitUntil: 'networkidle' });

  // Optionally, add interactions here (scroll, click) to trigger lazy-loaded assets

  await browser.close();
  console.log(`Site cloned to ${outputDir}`);
})();
