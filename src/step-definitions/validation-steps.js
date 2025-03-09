import {Then} from "@wdio/cucumber-framework";
import {pages} from "../po"

Then('the error message should contain {string}', async (expectedMessage) => {
    const errorMessage = await pages("login").loginForm.errorMsg;
    const actualMessage = (await errorMessage.getText()).trim();

    await expect(actualMessage).toContain(expectedMessage);
});

Then('the browser title should be {string}', async (expectedTitle) => {
    await expect(browser).toHaveTitle(expectedTitle);
});

Then('I should be redirected to dashboard', async () => {
    await pages("dashboard").header.headerLabel.waitForDisplayed({timeout: 5000});
    await expect(browser).toHaveUrl("/inventory.html", {containing: true });
});
Then('the page header should display {string}', async (expectedText) => {
    const header = await pages("dashboard").header.headerLabel;
    await expect(header).toHaveText(expectedText, {
        message: `Expected header to be "${expectedText}" but found "${await header.getText()}"`
    });
});
