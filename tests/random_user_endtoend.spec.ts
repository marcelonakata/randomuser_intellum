import { test, expect } from '@playwright/test';
import { RandomUserPage } from '../PageObject/random-user-page';

test.describe('Random User End-to-end Test Suite', () => {

  test.beforeEach(async ({ page }) => {
    //BaseUrl configured in playwright.config.js file.
    await page.goto("/");
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Validate browser title', async ({ page }) => {
    await expect(page).toHaveTitle("Random User Generator | Home");
  });

  test('Validate titles', async ({ page }) => {
    const expectedNameTitle = "Hi, My name is";
    const expectedBirthdayTitle = "My birthday is";
    const expectedEmailTitle = "My email address is";
    const expectedLocationTitle = "My address is";
    const expectedPhoneTitle = "My phone number is";
    const expectedPassowordTitle = "My password is";

    const randomUserPage = new RandomUserPage(page);
    await randomUserPage.waitToLoadFirstUser();

    const name_title = await randomUserPage.getNameTitle();
    expect(name_title).toEqual(expectedNameTitle);

    const email_title = await randomUserPage.getEmailTitle();
    expect(email_title).toEqual(expectedEmailTitle);

    const birthday_title = await randomUserPage.getBirthdayTitle();
    expect(birthday_title).toEqual(expectedBirthdayTitle);

    const location_title = await randomUserPage.getLocationTitle();
    expect(location_title).toEqual(expectedLocationTitle);

    const phone_title = await randomUserPage.getPhoneTitle();
    expect(phone_title).toEqual(expectedPhoneTitle);

    const password_title = await randomUserPage.getPasswordTitle();
    expect(password_title).toEqual(expectedPassowordTitle);
  });

  test('Validate name', async ({ page }) => {
    const randomUserPage = new RandomUserPage(page);
    await randomUserPage.waitToLoadFirstUser();

    const nameValueDisplayed = await randomUserPage.getNameValue();
    const expectedName = await randomUserPage.getHiddenNameValue();
    
    expect(expectedName).toEqual(nameValueDisplayed);
  });

  test('Validate email', async ({ page }) => {
    const randomUserPage = new RandomUserPage(page);
    await randomUserPage.waitToLoadFirstUser();

    const emailValueDisplayed = await randomUserPage.getEmailValue();
    const expectedEmail = await randomUserPage.getHiddenEmailValue();
    
    expect(emailValueDisplayed).toEqual(expectedEmail);
  });

  test('Validate birthday', async ({ page }) => {
    const randomUserPage = new RandomUserPage(page);
    await randomUserPage.waitToLoadFirstUser();

    const birthdayValueDisplayed = await randomUserPage.getBirthdayValue();
    const expectedBirthday = await randomUserPage.getHiddenBirthdayValue();
    
    expect(birthdayValueDisplayed).toEqual(expectedBirthday);
  });

  test('Validate location', async ({ page }) => {
    const randomUserPage = new RandomUserPage(page);
    await randomUserPage.waitToLoadFirstUser();

    const locationValueDisplayed = await randomUserPage.getLocationValue();
    const expectedLocation = await randomUserPage.getHiddenLocationValue();
    
    expect(locationValueDisplayed).toEqual(expectedLocation);
  });

  test('Validate phone', async ({ page }) => {
    const randomUserPage = new RandomUserPage(page);
    await randomUserPage.waitToLoadFirstUser();

    const phoneValueDisplayed = await randomUserPage.getPhoneValue();
    const expectedPhone = await randomUserPage.getHiddenPhoneValue();
    
    expect(phoneValueDisplayed).toEqual(expectedPhone);
  });

  test('Validate password', async ({ page }) => {
    const randomUserPage = new RandomUserPage(page);

    await randomUserPage.waitToLoadFirstUser();

    const passwordValueDisplayed = await randomUserPage.getPasswordValue();
    const expectedPassword = await randomUserPage.getHiddenPasswordValue();
    
    expect(passwordValueDisplayed).toEqual(expectedPassword);
  });
  
  test('Validate new random user generation', async ({ page }) => {
    const randomUserPage = new RandomUserPage(page);

    await randomUserPage.waitToLoadFirstUser();

    const userInfo = await randomUserPage.getUserInformation();

    await randomUserPage.generateNewUser();

    const newUserInfo = await randomUserPage.getUserInformation();

    // Assert if after clicking on "new" button, the new user's information is different from previous user.
    expect(userInfo.name).not.toEqual(newUserInfo.name);
    expect(userInfo.email).not.toEqual(newUserInfo.email);
    expect(userInfo.birthday).not.toEqual(newUserInfo.birthday);
    expect(userInfo.location).not.toEqual(newUserInfo.location);
    expect(userInfo.phone).not.toEqual(newUserInfo.phone);
    expect(userInfo.password).not.toEqual(newUserInfo.password);
  });
})
