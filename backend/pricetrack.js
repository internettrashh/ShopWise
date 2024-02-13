import puppeteer from "puppeteer";

const getQuotes = async () => {
    let query = "MSI Core i7 11th Gen - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650 MAX Q) GF63 Thin 11SC-852IN Gaming Laptop"; // Query as a variable
query = query.toLowerCase().replace(/[\(\)]/g, '').replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-'); // Convert to lowercase, remove parentheses, replace all non-alphanumeric characters with hyphens, and replace multiple hyphens with a single hyphen // Convert to lowercase, remove parentheses, and replace all non-alphanumeric characters with hyphens

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const page = await browser.newPage();

    await page.goto(`https://pricehistoryapp.com/product/${query}`, { // Use the formatted query in the URL
        waitUntil: "networkidle0",
    });

    const productImage = await page.evaluate(() => {
        const imgNode = document.querySelector("div.relative > span > img"); // Select the img tag inside div.relative > span
        return imgNode ? imgNode.getAttribute("src") : null; // Get the src attribute of the img tag
    });

    const productTitle = await page.evaluate(() => {
        const titleNode = document.querySelector("h1.font-semibold.text-lg"); // Select the h1 tag with the required classes
        return titleNode ? titleNode.textContent.trim() : null; // Get the text content of the h1 tag
    });

    await page.waitForSelector("div.text-2xl.font-semibold.relative.false > span"); // Wait for the price element to appear

    const productPrice = await page.evaluate(() => {
        const priceNode = document.querySelector("div.text-2xl.font-semibold.relative.false > span"); // Select the span tag inside the div with the required classes
        return priceNode ? priceNode.innerText.trim() : null; // Get the inner text of the span tag
    });

    const recommendation = await page.evaluate(() => {
        const recommendationNode = document.querySelector("p.text-gray-500.dark\\:text-gray-400.text-sm"); // Select the p tag with the required classes
        return recommendationNode ? recommendationNode.innerText.trim() : null; // Get the inner text of the p tag
    });

    const productLink = await page.evaluate(() => {
        const linkNode = document.querySelector("a.px-6.py-2.bg-secondary-600.hover\\:bg-secondary-500.text-white.font-medium.rounded"); // Select the a tag with the required classes
        return linkNode ? linkNode.getAttribute("href") : null; // Get the href attribute of the a tag
    });

    console.log(`Product image: ${productImage}`);
    console.log(`Product title: ${productTitle}`);
    console.log(`Product price: ${productPrice}`);
    console.log(`Recommendation: ${recommendation}`);
    console.log(`Product link: ${productLink}`);
    console.log(`graph:<iframe src="https://pricehistoryapp.com/embed/${query}" width="100%" height="500" frameborder="0" allowtransparency="true" scrolling="no"></iframe>`)

    await browser.close();
};

<<<<<<< HEAD
getQuotes();
=======
getQuotes();
>>>>>>> 8c22aa0c85c6a6755253b16882535b01d623a196
