import {Given, When} from "@wdio/cucumber-framework";
import {pages} from "../po";
import clearField from "./utils/clearField.js";


Given("I am on the {string} page", (pageName) => {
    return pages(pageName).open();
})
When('I enter {string} as username', async (username) => {
    await pages("login").loginForm.usernameField.setValue(username);
});

When('I enter {string} as password', async (password) => {
    await pages("login").loginForm.passwordField.setValue(password);
});

When('I clear {string} field', async (fieldName) => {
    const fieldMap = {
        'username': pages("login").loginForm.usernameField,
        'password': pages("login").loginForm.passwordField
    };
    await clearField(fieldMap[fieldName.toLowerCase()]);
});

When('I click the login button', async () => {
    await pages("login").loginForm.clickLoginButton()
});