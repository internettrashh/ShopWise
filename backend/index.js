import express from "express";
import puppeteer from "puppeteer";

const app = express();
const port = 3001;

app.get("/quotes", async (req, res) => {
    const query = req.query.query; // Get the query parameter from the request
    const encodedQuery = encodeURIComponent(query); // Encode the query

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const page = await browser.newPage();

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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    const browser =  puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });
});
