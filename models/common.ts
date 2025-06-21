import { PageObjectModel } from "./pageObjectModel";
import { Locator, Page, expect } from '@playwright/test';

export class CommonPage extends PageObjectModel {
// Common locators can be defined here
  menu: Locator;
  productManangement: Locator;
  productTemplates: Locator;
  addTemplate: Locator;

    constructor(page: Page) {
        super(page);
            this.menu = this.page.getByRole('button').filter({ hasText: 'menu' })
            this.productManangement = this.page.getByRole('img', { name: 'Products management' })
            this.productTemplates = this.page.getByRole('link', { name: 'Products Templates' })
        }
        

    async navigateToProductManagement() {
        await expect(this.menu).toBeVisible();
        await this.menu.waitFor({ state: 'visible', timeout: 50000 });
        await this.menu.click()
        await this.productManangement.waitFor({ state: 'visible', timeout: 15000 });
        await this.productManangement.click({ timeout: 600000 });
    }

    async navigateToTemplate(){
        await expect(this.menu).toBeVisible();
        await this.menu.waitFor({ state: 'visible', timeout: 50000 });
        await this.menu.click();
        await this.productManangement.click({ timeout: 600000 });
        await this.productTemplates.click();
        
    }
}