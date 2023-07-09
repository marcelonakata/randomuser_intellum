
import { Browser, test, expect } from '@playwright/test';
import { RandomUserPage } from '../PageObject/random-user-page';

test.describe('Random User End-to-end Test Suite', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://randomuser.me/');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Validate browser title', async ({ page }) => {
    await expect(page).toHaveTitle("Random User Generator | Home");
  });

  test('Validate Titles', async ({ page }) => {
    const randomUserPage = new RandomUserPage(page);

    randomUserPage.waitToLoadFirstUser();

    await randomUserPage.hoverOnNameIcon();
    const name_title = await randomUserPage.getUserTitle();
    expect(name_title).toEqual("Hi, My name is");

    await randomUserPage.hoverOnEmailIcon();
    const email_title = await randomUserPage.getUserTitle();
    expect(email_title).toEqual("My email address is");

    await randomUserPage.hoverOnBirthdayIcon();
    const birthday_title = await randomUserPage.getUserTitle();
    expect(birthday_title).toEqual("My birthday is");

    await randomUserPage.hoverOnLocationIcon();
    const location_title = await randomUserPage.getUserTitle();
    expect(location_title).toEqual("My address is");

    await randomUserPage.hoverOnPhoneIcon();
    const phone_title = await randomUserPage.getUserTitle();
    expect(phone_title).toEqual("My phone number is");

    await randomUserPage.hoverOnPasswordIcon();
    const password_title = await randomUserPage.getUserTitle();
    expect(password_title).toEqual("My password is");
  });

  test('Validate name', async ({ page }) => {
    const randomUserPage = new RandomUserPage(page);

    await randomUserPage.waitToLoadFirstUser();

    await randomUserPage.hoverOnNameIcon();
    const name_value = await randomUserPage.getUserValue();
    const expected_name_value = await randomUserPage.getHiddenNameValue();
    expect(name_value).toEqual(expected_name_value);

  });

  test('Validate email', async ({ page }) => {
    const randomUserPage = new RandomUserPage(page);

    await randomUserPage.waitToLoadFirstUser();

    await randomUserPage.hoverOnEmailIcon();
    const email_value = await randomUserPage.getUserValue();
    const expected_email_value = await randomUserPage.getHiddenEmailValue();
    expect(email_value).toEqual(expected_email_value);

  });

  test('Validate birthday', async ({ page }) => {
    const randomUserPage = new RandomUserPage(page);

    await randomUserPage.waitToLoadFirstUser();

    await randomUserPage.hoverOnBirthdayIcon();
    const birthday_value = await randomUserPage.getUserValue();
    const expected_birthday_value = await randomUserPage.getHiddenBirthdayValue();
    expect(birthday_value).toEqual(expected_birthday_value);

  });

  test('Validate location', async ({ page }) => {
    const randomUserPage = new RandomUserPage(page);

    await randomUserPage.waitToLoadFirstUser();

    await randomUserPage.hoverOnLocationIcon();
    const location_value = await randomUserPage.getUserValue();
    const expected_location_value = await randomUserPage.getHiddenLocationValue();
    expect(location_value).toEqual(expected_location_value);

  });

  test('Validate phone', async ({ page }) => {
    const randomUserPage = new RandomUserPage(page);

    await randomUserPage.waitToLoadFirstUser();

    await randomUserPage.hoverOnPhoneIcon();
    const phone_value = await randomUserPage.getUserValue();
    const expected_phone_value = await randomUserPage.getHiddenPhoneValue();
    expect(phone_value).toEqual(expected_phone_value);
  });

  test('Validate password', async ({ page }) => {
    const randomUserPage = new RandomUserPage(page);

    await randomUserPage.waitToLoadFirstUser();

    await randomUserPage.hoverOnPasswordIcon();
    const password_value = await randomUserPage.getUserValue();
    const expected_password_value = await randomUserPage.getHiddenPasswordValue();
    expect(password_value).toEqual(expected_password_value);

  });
  
  test('Validate generation of new ramdon user', async ({ page }) => {
    const randomUserPage = new RandomUserPage(page);

    await randomUserPage.waitToLoadFirstUser();

    const userInfo = await randomUserPage.getUserInformation();

    await randomUserPage.generateNewUser();

    const newUserInfo = await randomUserPage.getUserInformation();

    // Assert if after clicking on "new" button, information of the new user is different from previous user.
    expect(userInfo).not.toEqual(newUserInfo);

  });

})
