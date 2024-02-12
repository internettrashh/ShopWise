import puppeteer from "puppeteer";

const getQuotes = async () => {
    const query = "realme buds"; // Query as a variable
    const encodedQuery = encodeURIComponent(query); // Encode the query

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const page = await browser.newPage();

    await page.goto(`https://www.xerve.in/prices?q=${encodedQuery}`, { // Use the encoded query in the URL
        waitUntil: "domcontentloaded",
    });

    const quotes = await page.evaluate(() => {
        const quoteNodes = document.querySelectorAll("._tile_container");
        const imgNodes = document.querySelectorAll(".St-Img-M img"); // Select the img tag inside .St-Img-M
        const quotesArray = Array.from(quoteNodes);
        const imgArray = Array.from(imgNodes);
        
        return quotesArray.map((quote, index) => {
            const text = quote.innerText;
            const link = quote.getAttribute("href");
            const title = quote.getAttribute("title");
            const src = imgArray[index]?.getAttribute("src"); // Use optional chaining in case there are less images than quotes
            return { link, title, src };
        });
    });

    console.log(quotes);

    await browser.close();
};

getQuotes();