class Base {
    async navigateToPage(url) {
        await browser.url(url);
        await driver.pause(5000);
    }
}

export default Base;