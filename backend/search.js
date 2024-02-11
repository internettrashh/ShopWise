import puppeteer from "puppeteer";

const getQuotes = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const page = await browser.newPage();

    await page.goto(`https://www.xerve.in/prices/buy-realme-buds-q2s-bluetooth-truly-wireless-in-ear-earbuds-with-30-hours-of-total-playback-ai-enc-noise-cancellation-for-calls-night-black/xrvkynb1ilfno`, {
        waitUntil: "domcontentloaded",
    });

   // await new Promise(resolve => setTimeout(resolve, 4000));
    
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
            }
        });

        return output;
    });

    console.log(quotes);

   await browser.close();
};

getQuotes();
