import puppeteer from "puppeteer";

const getQuotes = async () => {
    const query = "Realme Buds Q2S Bluetooth Truly Wireless In Ear Earbuds With 30 Hours Of Total Playback, Ai Enc Noise Cancellation For Calls"; // Query as a variable
    const encodedQuery = encodeURIComponent(query); // Encode the query

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const page = await browser.newPage();

    await page.goto(`https://www.xerve.in/prices/buy-${encodedQuery}/xrvkynb1ilfno`, { // Use the encoded query in the URL
        waitUntil: "domcontentloaded",
    });

    const quotes = await page.evaluate(() => {
        const contlistimageNodes = document.querySelectorAll(".contlistimage");
        const output = {};

        contlistimageNodes.forEach(node => {
            const onclickValue = node.getAttribute("onclick");
            if (onclickValue.includes('flipkart')) {
                output.flipkartlink = onclickValue.match(/https:\/\/[^\s'"]+/)[0];
            } else if (onclickValue.includes('vijaysales')) {
                output.vijaysaleslink = onclickValue.match(/https:\/\/[^\s'"]+/)[0];
            } else if (onclickValue.includes('myntra')) {
                output.myntralink = onclickValue.match(/https:\/\/[^\s'"]+/)[0];
            } else if (onclickValue.includes('croma')) {
                output.cromalink = onclickValue.match(/https:\/\/[^\s'"]+/)[0];
            } else if (onclickValue.includes('amazon')) {
                output.amazonlink = onclickValue.match(/https:\/\/[^\s'"]+/)[0];
            } else if (onclickValue.includes('sangeetha')) {
                output.sangeethalink = onclickValue.match(/https:\/\/[^\s'"]+/)[0];
            } else if (onclickValue.includes('Reliance')) {
                output.relianceliqlink = onclickValue.match(/https:\/\/[^\s'"]+/)[0];
            }
        });

        const imgNodes = document.querySelectorAll(".img-responsive");
        imgNodes.forEach((imgNode, index) => {
            const src = imgNode.getAttribute("src");
            if (src.includes('Flipkart')) {
                output.flipkartlogo = src;
            } else if (src.includes('Amazon')) {
                output.amazonlogo = src;
            } else if (src.includes('Vijaysales')) {
                output.vijaysaleslogo = src;
            } else if (src.includes('Myntra')) {
                output.myntralogo = src;
            } else if (src.includes('Croma')) {
                output.cromalogo = src;
            } else if (src.includes('Sangeetha')) {
                output.sangeethalogo = src;
            } else if (src.includes('Reliance')) {
                output.relianceliqlogo = src;
            }
        });

        return output;
    });

    console.log(quotes);

    //await browser.close();
};

getQuotes();
