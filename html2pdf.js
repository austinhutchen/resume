const puppeteer = require('puppeteer');
const fs = require('fs');

async function convertHtmlToPdf(htmlFilePath, pdfFilePath) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Load the HTML file
  const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

  // Convert to PDF
  await page.pdf({ path: pdfFilePath, format: 'A4' });

  await browser.close();
  console.log(`PDF saved to ${pdfFilePath}`);
}

// Usage: node convert.js resume.html resume.pdf
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Usage: node convert.js <htmlFilePath> <pdfFilePath>');
  process.exit(1);
}

const [htmlFilePath, pdfFilePath] = args;
convertHtmlToPdf(htmlFilePath, pdfFilePath);
