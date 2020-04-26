import {
  browser,
  by,
  element,
  ElementFinder,
  ExpectedConditions as EC,
} from "protractor";

export class HtmlFormTestPage {
  private pageTitle: ElementFinder;
  private userNameInput: ElementFinder;
  private passwordInput: ElementFinder;
  private commentTextArea: ElementFinder;
  private checkBoxInput: ElementFinder;
  private radioItemsInput: ElementFinder;
  private multipleSelectInput: ElementFinder;
  private dropDownInput: ElementFinder;
  private submitButton: ElementFinder;



  constructor() {
    this.pageTitle = element(by.tagName("h1"));
    this.userNameInput = element(by.name("username"));
    this.passwordInput = element(by.name("password"));
    this.commentTextArea = element(by.name("comments"));
    this.checkBoxInput = element(by.xpath("//*[@id=\"HTMLFormElements\"]/table/tbody/tr[5]/td/input[1]"));
    this.radioItemsInput = element(by.xpath("//*[@id=\"HTMLFormElements\"]/table/tbody/tr[6]/td/input[2]"));
    this.multipleSelectInput = element(by.xpath("//*[@id=\"HTMLFormElements\"]/table/tbody/tr[7]/td/select/option[3]"));
    this.dropDownInput = element(by.xpath("//*[@id=\"HTMLFormElements\"]/table/tbody/tr[8]/td/select/option[1]"));
    this.submitButton = element(by.buttonText("submit"));

  }

  /**
   * Go to html form test example page
   *
   * @return {Promise}
   */
  public go() {
    return browser.get("/styled/basic-html-form-test.html");
  }

  /**
   * Get page title
   */
  public async getPageTitleText() {
    await browser.wait(EC.visibilityOf(this.pageTitle));
    return this.pageTitle.getText();
  }
  public async enterUsername(text) {
    await this.userNameInput.clear();
    return this.userNameInput.sendKeys(text);
  }
  public async enterPassword(text) {
    await this.passwordInput.clear();
    return this.passwordInput.sendKeys(text);
  }
  public async enterComment(text) {
    await this.commentTextArea.clear();
    return this.commentTextArea.sendKeys(text);
  }
  public async enterCheckbox() {
     await browser.wait(EC.elementToBeClickable(this.checkBoxInput));
     return this.checkBoxInput.click();
  }
  public async enterRadioButton() {
    await browser.wait(EC.elementToBeClickable(this.radioItemsInput));
    return this.radioItemsInput.click();
  }
  public async enterMultipleSelect() {
    await browser.wait(EC.elementToBeClickable(this.multipleSelectInput));
    return this.multipleSelectInput.click();
  }
  public async enterDropDown() {
    await browser.wait(EC.elementToBeClickable(this.dropDownInput));
    return this.dropDownInput.click();
  }
  public async clickOnSubmitButton() {
    await browser.wait(EC.elementToBeClickable(this.submitButton));
    return this.submitButton.click();
}};
