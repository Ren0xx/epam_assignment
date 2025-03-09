/**
 * @param element { ChainablePromiseElement }
 */

async function clearField(element) {
    //workaround for problem with chrome - inputs didn't clear themselves
    await element.doubleClick();
    await browser.keys('Delete');
    const value = await element.getValue();
    if (value !== '') {
        throw new Error('Field was not cleared properly');
    }
}

export default clearField;