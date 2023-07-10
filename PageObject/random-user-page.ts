import { expect, Page, Locator } from '@playwright/test';

interface UserInformation {
  name: string;
  email: string;
  birthday: string;
  location: string;
  phone: string;
  password: string;
}

export class RandomUserPage {
  private page: Page;
  private user_title: Locator;
  private user_value: Locator;
  private name_icon: Locator;
  private email_icon: Locator;
  private birthday_icon: Locator;
  private location_icon: Locator;
  private phone_icon: Locator;
  private password_icon: Locator;
  private name_value: Locator;
  private email_value: Locator;
  private birthday_value: Locator;
  private location_value: Locator;
  private phone_value: Locator;
  private password_value: Locator;
  private new_user: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.user_title = this.page.locator('#user_title');
    this.user_value = this.page.locator('#user_value');
    this.name_icon = this.page.locator('[data-label="name"]').first();
    this.birthday_icon = this.page.locator('[data-label="birthday"]').first();
    this.email_icon = this.page.locator('[data-label="email"]').first();
    this.location_icon = this.page.locator('[data-label="location"]').first();
    this.phone_icon = this.page.locator('[data-label="phone"]').first();
    this.password_icon = this.page.locator('[data-label="pass"]').first();
    this.name_value = this.page.locator('xpath=//li[@data-title="Hi, My name is"]');
    this.email_value = this.page.locator('xpath=//li[@data-title="My email address is"]');
    this.birthday_value = this.page.locator('xpath=//li[@data-title="My birthday is"]');
    this.location_value = this.page.locator('xpath=//li[@data-title="My address is"]');
    this.phone_value = this.page.locator('xpath=//li[@data-title="My phone number is"]');
    this.password_value = this.page.locator('xpath=//li[@data-title="My password is"]');
    this.new_user = this.page.locator('xpath=//div[@id="user_photo"]/a');
  }

  async waitToLoadFirstUser(): Promise<void> {
    await this.page.waitForFunction(() => {
        const element = document.querySelector('#user_value');
        return element && element.textContent !== '...';
    });
  }

  async getUserTitle(): Promise<string> {
    return await this.user_title.textContent() as string;
  }

  async getUserValue(): Promise<string> {
    return await this.user_value.textContent() as string;
  }

  async hoverOnNameIcon(): Promise<void> {
    await this.name_icon.hover();
  }

  async hoverOnBirthdayIcon(): Promise<void> {
    await this.birthday_icon.hover();
  }

  async hoverOnEmailIcon(): Promise<void> {
    await this.email_icon.hover();
  }

  async hoverOnLocationIcon(): Promise<void> {
    await this.location_icon.hover();
  }

  async hoverOnPhoneIcon(): Promise<void> {
    await this.phone_icon.hover();
  }

  async hoverOnPasswordIcon(): Promise<void> {
    await this.password_icon.hover();
  }

  async getHiddenNameValue(): Promise<string> {
    return this.getDataValueAttribute(this.name_value);
  }

  async getHiddenEmailValue(): Promise<string> {
    return this.getDataValueAttribute(this.email_value);
  }

  async getHiddenBirthdayValue(): Promise<string> {
    return this.getDataValueAttribute(this.birthday_value);
  }

  async getHiddenLocationValue(): Promise<string> {
    return this.getDataValueAttribute(this.location_value);
  }

  async getHiddenPhoneValue(): Promise<string> {
    return this.getDataValueAttribute(this.phone_value);
  }

  async getHiddenPasswordValue(): Promise<string> {
    return this.getDataValueAttribute(this.password_value);
  }

  async getDataValueAttribute(locator: Locator): Promise<string> {
    return await locator.getAttribute('data-value') as string;
  }

  async generateNewUser(): Promise<void> {
    await this.new_user.click();
    await this.page.waitForTimeout(2000);
  }

  async getNameValue(): Promise<string> {
    await this.hoverOnNameIcon();
    return await this.getUserValue();
  }

  async getEmailTitle(): Promise<string> {
    await this.hoverOnEmailIcon();
    return await this.getUserTitle();
  }

  async getBirthdayTitle(): Promise<string> {
    await this.hoverOnBirthdayIcon();
    return await this.getUserTitle();
  }

  async getLocationTitle(): Promise<string> {
    await this.hoverOnLocationIcon();
    return await this.getUserTitle();
  }

  async getPhoneTitle(): Promise<string> {
    await this.hoverOnPhoneIcon();
    return await this.getUserTitle();
  }

  async getPasswordTitle(): Promise<string> {
    await this.hoverOnPasswordIcon();
    return await this.getUserTitle();
  }
  
  async getNameTitle(): Promise<string> {
    await this.hoverOnNameIcon();
    return await this.getUserTitle();
  }

  async getEmailValue(): Promise<string> {
    await this.hoverOnEmailIcon();
    return await this.getUserValue();
  }

  async getBirthdayValue(): Promise<string> {
    await this.hoverOnBirthdayIcon();
    return await this.getUserValue();
  }

  async getLocationValue(): Promise<string> {
    await this.hoverOnLocationIcon();
    return await this.getUserValue();
  }

  async getPhoneValue(): Promise<string> {
    await this.hoverOnPhoneIcon();
    return await this.getUserValue();
  }

  async getPasswordValue(): Promise<string> {
    await this.hoverOnPasswordIcon();
    return await this.getUserValue();
  }

  async getUserInformation(): Promise<UserInformation> {
    const name = await this.getNameValue();
    const email = await this.getEmailValue();
    const birthday = await this.getBirthdayValue();
    const location = await this.getLocationValue();
    const phone = await this.getPhoneValue();
    const password = await this.getPasswordValue();

    return { name, email, birthday, location, phone, password};
  }
  
};