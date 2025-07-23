import { PageObjectModel } from "./pageObjectModel";
import { Locator, Page, expect } from '@playwright/test';

export class CommonPage extends PageObjectModel {
// Common locators can be defined here
  menu: Locator;
  productManangement: Locator;
  productTemplates: Locator;
  product: Locator;
  addTemplate: Locator;

    constructor(page: Page) {
        super(page);
            this.menu = this.page.locator("mat-sidenav-content.img[alt='Logo']");
            //this.productManangement = this.page.locator("i.img[alt='Products management']")
            //this.productManangement = this.page.locator('input[ng-reflect-message="Products management"]')
            this.productManangement = this.page.getByRole('img', { name: 'Products management' })
            this.product = this.page.getByRole('link', { name: 'Products', exact: true })
            //this.productManangement = this.page.locator('mat-sidenav').getByText('Products', { exact: true })

            this.productTemplates = this.page.getByRole('link', { name: 'Products Templates' })
        }
        

    async navigateToProductManagement() {
       // await expect(this.menu).toBeVisible();
       // await this.menu.waitFor({ state: 'visible', timeout: 50000 });
       // await this.menu.click()
        //await this.page.waitForTimeout(6000);
        
        await this.productManangement.dblclick({ timeout: 600000 });
        await this.page.waitForTimeout(6000);
        await this.product.click()
        //await this.productManangement.click({ timeout: 600000 });
       // await this.productManangement.waitFor({ state: 'visible' });
 
       //await expect(this.productManangement).toBeVisible()
    }

    async navigateToTemplate(){
        await expect(this.menu).toBeVisible();
        await this.menu.waitFor({ state: 'visible', timeout: 50000 });
        await this.menu.click();
        await this.productManangement.click({ timeout: 600000 });
        await this.productTemplates.click();
        
    }
}