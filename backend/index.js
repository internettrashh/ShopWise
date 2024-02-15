import express from "express";
import cors from 'cors';
import puppeteer from "puppeteer";
import puppeteerExtra from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
puppeteerExtra.use(StealthPlugin());

const app = express();
app.use(cors());
const port = 3001;

app.get("/search", async (req, res) => {
    const query = req.query.query; // Get the query parameter from the request
    const encodedQuery = encodeURIComponent(query); // Encode the query

    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null,
    });

    const page = await browser.newPage();

    // Set the user agent and viewport
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');
    await page.setViewport({ width: 1280, height: 720 });

    await page.goto(`https://www.xerve.in/prices?q=${encodedQuery}`, {
        waitUntil: "domcontentloaded",
    });

    const quotes = await page.evaluate(() => {
        const quoteNodes = document.querySelectorAll("._tile_container");
        const imgNodes = document.querySelectorAll(".St-Img-M img");
        const quotesArray = Array.from(quoteNodes);
        const imgArray = Array.from(imgNodes);
        
        return quotesArray.map((quote, index) => {
            const text = quote.innerText;
            const link = quote.getAttribute("href");
            const title = quote.getAttribute("title");
            const src = imgArray[index]?.getAttribute("src");
            return { link, title, src };
        });
    });

    res.json(quotes);

    await browser.close();
});

app.get("/search/links", async (req, res) => {
    const query = req.query.query; // Get the query parameter from the request
    const encodedQuery = encodeURIComponent(query); // Encode the query

    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null,
    });

    const page = await browser.newPage();

    // Set the user agent and viewport
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');
    await page.setViewport({ width: 1280, height: 720 });

    await page.goto(`https://www.xerve.in/prices/buy-${encodedQuery}/xrvkynb1ilfno`, {
        waitUntil: "domcontentloaded",
    });

    const quotes = await page.evaluate(() => {
        const contlistimageNodes = document.querySelectorAll(".contlistimage");
        const output = {};

        contlistimageNodes.forEach((node) => {
            const onclickValue = node.getAttribute("onclick");
            const linkMatch = onclickValue.match(/https:\/\/[^\s'"]+/);
            if (linkMatch) {
                const link = linkMatch[0];
                if (onclickValue.includes("Flipkart")) {
                    output.flipkart = {
                        link,
                        logo: "https://d372i0x0rvq68a.cloudfront.net/seller_logos/Flipkart.com/Seller-Logo.png"
                    };
                } else if (onclickValue.includes("Vijaysales")) {
                    output.vijaysales = {
                        link,
                        logo: "https://d372i0x0rvq68a.cloudfront.net/seller_logos/Vijaysales.com/Seller-Logo.png"
                    };
                } else if (onclickValue.includes("Myntra")) {
                    output.myntra = {
                        link,
                        logo: "https://d372i0x0rvq68a.cloudfront.net/seller_logos/Myntra.com/Seller-Logo.png"
                    };
                } else if (onclickValue.includes("Croma")) {
                    output.croma = {
                        link,
                        logo: "Croma logo URL here"
                    };
                } else if (onclickValue.includes("Amazon")) {
                    output.amazon = {
                        link,
                        logo: "Amazon logo URL here"
                    };
                } else if (onclickValue.includes("Sangeetha")) {
                    output.sangeetha = {
                        link,
                        logo: "Sangeetha logo URL here"
                    };
                } else if (onclickValue.includes("Reliance")) {
                    output.reliance = {
                        link,
                        logo: "Reliance logo URL here"
                    };
                }
            }
        });

        return output;
    });

    res.json(quotes);

    await browser.close();
});
app.get('/product', async (req, res) => {
    let query = req.query.q;
    query = query.toLowerCase().replace(/[\(\)]/g, '').replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');

    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null,
    });

    const page = await browser.newPage();

    await page.goto(`https://pricehistoryapp.com/product/${query}`, {
        waitUntil: "networkidle0",
    });

    const productImage = await page.evaluate(() => {
        const imgNode = document.querySelector("div.relative > span > img");
        return imgNode ? imgNode.getAttribute("src") : null;
    });

    const productTitle = await page.evaluate(() => {
        const titleNode = document.querySelector("h1.font-semibold.text-lg");
        return titleNode ? titleNode.textContent.trim() : null;
    });

    await page.waitForSelector("div.text-2xl.font-semibold.relative.false > span");

    const productPrice = await page.evaluate(() => {
        const priceNode = document.querySelector("div.text-2xl.font-semibold.relative.false > span");
        return priceNode ? priceNode.innerText.trim() : null;
    });

    const recommendation = await page.evaluate(() => {
        const recommendationNode = document.querySelector("p.text-gray-500.dark\\:text-gray-400.text-sm");
        return recommendationNode ? recommendationNode.innerText.trim() : null;
    });

    const productLink = await page.evaluate(() => {
        const linkNode = document.querySelector("a.px-6.py-2.bg-secondary-600.hover\\:bg-secondary-500.text-white.font-medium.rounded");
        return linkNode ? linkNode.getAttribute("href") : null;
    });

    const graph = `<iframe src="https://pricehistoryapp.com/embed/${query}" width="100%" height="500" frameborder="0" allowtransparency="true" scrolling="no"></iframe>`;

    await browser.close();

    res.json({
        productImage,
        productTitle,
        productPrice,
        recommendation,
        productLink,
        graph
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    // const browser =  puppeteer.launch({
    //     headless: false,
    //     defaultViewport: null,
    // });
});
