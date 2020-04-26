import { assert, expect } from "chai";
import { Given, Then } from "cucumber";
import { FormProcessorPage } from "../../pages/formProcessorPage";
import {When} from 'cucumber'
import {browser} from "protractor";

const formProcessorPage: FormProcessorPage = new FormProcessorPage();

//THEN
Then(/^"([^"]*)" message is displayed$/, async (expectedText) => {
    let text = await formProcessorPage.getExplanationText();
    expect(text).to.contains(expectedText);
});
