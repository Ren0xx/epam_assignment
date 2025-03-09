class BasePage {
    /**
     * @param {string} url
     */
    constructor(url) {
        this.url = url;
    }

    open(){
        return browser.url(this.url);
    }
}
export default BasePage;