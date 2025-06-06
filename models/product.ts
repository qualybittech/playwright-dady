import { PageObjectModel } from "./pageObjectModel";
import { Locator, Page, expect } from '@playwright/test';
import { generateRandomName } from '../utils/helper';

export class AddProduct extends PageObjectModel {
  menu: Locator;
  add: Locator;
  productManangement: Locator;
  productCode: Locator;
  productDescription: Locator;
  eanCode: Locator;
  upcCode: Locator;
  skuType: Locator;
  unitCount: Locator;
  unitName: Locator;
  selectProductType: Locator;
  selectProductSubType: Locator;
  productInformationAdd: Locator;
  saveProduct: Locator;
  purchaseDescription: Locator;
  packageDetails: Locator;
  sku: Locator;
  skuUnit: Locator;
  yesButton: Locator;
  mqo: Locator;
  mqs: Locator;
  stackable: Locator;
  pricingDetails: Locator;
  unit: Locator;
  decimal: Locator;
  skuBuyerMargin: Locator;
  skuBuyerDecimal: Locator;
  palletBuyerMargin: Locator;
  palletBuyerDecimal: Locator;
  otherDetails: Locator;
  addKeyword: Locator;
  addKeywordInput: Locator;
  publish: Locator;
  emailInput: Locator;
  passwordInput: Locator;
  signInButton: Locator; 
  productAttributes: Locator;
  packageAttributes: Locator;
  inventory: Locator;
  productAttributeInput: Locator;
  addAttributes: Locator;
  productAdd: Locator;
  product: Locator;
  addedBy:Locator;
  inventoryLocation:Locator;
  openingInventory:Locator;
  inventorySelect:Locator;
  netWeight:Locator;
  netCost:Locator;

  constructor(page: Page) {
    super(page);

    this.add = this.page.getByRole('button', { name: 'Add Product' });
    this.menu = this.page.getByRole('button').filter({ hasText: 'menu' })
    this.productManangement = this.page.getByRole('img', { name: 'Products management' })
    this.product = this.page.getByRole('navigation').filter({ hasText: 'Products management' }).locator('i').nth(1)
    this.productCode = this.page.locator('div').filter({ hasText: /^Product CodeProduct Description$/ }).getByRole('textbox').first();
    this.productDescription = this.page.locator('div').filter({ hasText: /^Product CodeProduct Description$/ }).getByRole('textbox').nth(1);
    this.eanCode = this.page.locator('div:nth-child(2) > div:nth-child(2) > .attribute > .attribute-input > .ng-untouched');
    this.upcCode = this.page.locator('.col-2 > .attribute > .attribute-input > .ng-untouched').first();
    this.skuType = this.page.getByRole('region', { name: 'Product Information Add' }).locator('select');
    this.unitCount = this.page.getByRole('region', { name: 'Product Information Add' }).getByRole('spinbutton');
    this.purchaseDescription = this.page.locator('div:nth-child(3) > .attribute > .attribute-input > .ng-untouched');
    //this.unitCount = this.page.locator('div').filter({ hasText: /^Unit Count\/SKU$/ }).first()
    this.unitName = this.page.locator('div:nth-child(5) > .attribute > .attribute-input > .ng-untouched');
    //this.selectProductType = this.page.getByRole('region', { name: 'Product Information Add' }).locator('span').first();
    this.selectProductType = this.page.getByRole('textbox', { name: 'Select Product Type Select' })
    this.selectProductSubType = this.page.getByRole('region', { name: 'Product Information Add' }).locator('span').nth(2);
    this.productInformationAdd = this.page.locator('div:nth-child(3) > .attribute > .attribute-input > .ng-pristine');
    this.saveProduct = this.page.getByRole('button', { name: 'Save Draft' });
    this.packageDetails = this.page.getByText('Package Details');
    this.sku = this.page.getByRole('region', { name: 'Product Information Add' }).locator('select');
    this.skuUnit = this.page.getByText('Unit Count/UNIT');
    this.yesButton = this.page.getByRole('button', { name: 'Yes' });
    this.mqo = this.page.getByRole('textbox').first();
    this.mqs = this.page.getByRole('textbox', { name: 'Enter your value' });
    this.stackable = this.page.getByRole('button', { name: 'Yes' });
    this.pricingDetails = this.page.getByText('Pricing Details', { exact: true });
    this.unit = this.page.getByRole('row', { name: 'MARGIN %' }).getByRole('spinbutton').first();
    this.decimal = this.page.getByRole('row', { name: 'DECIMAL' }).getByRole('spinbutton').first();
    this.skuBuyerMargin = this.page.getByRole('row', { name: 'MARGIN %' }).getByRole('spinbutton').nth(1);
    this.skuBuyerDecimal = this.page.getByRole('row', { name: 'DECIMAL' }).getByRole('spinbutton').nth(1);
    this.palletBuyerMargin = this.page.getByRole('row', { name: 'MARGIN %' }).getByRole('spinbutton').nth(2);
    this.palletBuyerDecimal = this.page.getByRole('row', { name: 'DECIMAL' }).getByRole('spinbutton').nth(2);
    this.otherDetails = this.page.getByText('Other Details');
    this.addKeywordInput = this.page.getByRole('textbox', { name: 'Type keywords that you want' })
    this.addKeyword = this.page.getByRole('region', { name: 'Product Keywords' }).getByRole('button');
    this.publish = this.page.getByRole('button', { name: 'Publish' });
    this.emailInput = this.page.getByRole('textbox', { name: 'Email ID' });
    this.passwordInput = this.page.getByRole('textbox', { name: 'Password' });
    this.signInButton = this.page.getByRole('button', { name: 'Sign In' });
    this.productAttributes = this.page.getByRole('checkbox', { name: 'Product Attributes' })
    this.packageAttributes = this.page.getByRole('checkbox', { name: 'Package Attributes' })
	  this.inventory = this.page.getByRole('checkbox', { name: 'Inventory' })
    this.productAttributeInput = this.page.getByRole('region', { name: 'Product Unit : Wt/Unit : 0.' }).locator('#yesno')
    this.productAdd = this.page.locator('#pAttribute')
    this.addAttributes = this.page.getByLabel('Product Unit : Wt/Unit : 0.').getByRole('button', { name: 'Add' })
    this.openingInventory=this.page.getByPlaceholder('Enter your value').first()
	  this.inventoryLocation=this.page.getByRole('region', { name: 'Inventory (You can not enable' }).getByRole('textbox').first()
	  this.addedBy=this.page.getByRole('region', { name: 'Inventory (You can not enable' }).getByRole('textbox').nth(1)
    this.inventorySelect = this.page.locator('select').nth(1)
    this.netCost = this.page.getByRole('textbox', { name: 'Enter your value' }).first()
	  this.netWeight = this.page.getByRole('textbox', { name: 'Enter your value' }).nth(1)
    
  }

  async navigateTo(url: string) {
        await this.page.goto(url);
  }
  //  Method defined outside constructor
  async part(productCode,productDescription,upcCode,eanCode,unitCount,purchaseDescription,openingInventory,inventoryLocation,addedBy,netCost,netWeight) {

    await this.menu.click({ timeout: 60000 })
    await this.productManangement.click({ timeout: 15000 });
    await this.add.click({ timeout: 30000 });
    await this.productAttributes.check({ timeout: 15000 });
    await this.packageAttributes.check({ timeout: 15000 });
    await this.inventory.check({ timeout: 15000 });
    await this.productCode.click({ timeout: 15000 });
    await this.productCode.fill(productCode);
    await this.productDescription.click();
    await this.productDescription.fill(productDescription);
    await this.upcCode.click({ timeout: 15000 });
    await this.upcCode.fill(upcCode);
    await this.eanCode.click();
    await this.eanCode.fill(eanCode);
    await this.skuType.selectOption('UNIT');
    await this.unitCount.click({ timeout: 60000 });
    await this.unitCount.fill(unitCount);
    await this.selectProductType.click();
    await this.openingInventory.click()
    await this.openingInventory.fill(openingInventory)
    await this.inventorySelect.selectOption('UNIT');
    await this.inventoryLocation.click()
    await this.inventoryLocation.fill(inventoryLocation)
    await this.addedBy.click()
    await this.addedBy.fill(addedBy)

    await this.netCost.click();
    await this.netCost.fill(netCost)
    await this.netWeight.click();
    await this.netWeight.fill(netWeight)

  }
    async package(mqo,mqs) {
    await this.packageDetails.click({ timeout: 15000 });
    await this.mqo.click({ timeout: 60000 });
    await this.mqo.fill(mqo)
    await this.mqs.click()
    await this.mqs.fill(mqs)
    }

    async pricing(unit,decimal,skuBuyerMargin,skuBuyerDecimal){
        await this.pricingDetails.click({ timeout: 15000 })
        await this.unit.click({ timeout: 60000 })
        await this.unit.fill(unit)
        await this.decimal.click({ timeout: 15000 })
        await this.decimal.fill(decimal)
        await this.skuBuyerMargin.click()
        await this.skuBuyerMargin.fill(skuBuyerMargin)
        await this.skuBuyerDecimal.click()
        await this.skuBuyerDecimal.fill(skuBuyerDecimal)

    }

    async other(addKeywordInput){
        await this.otherDetails.click({ timeout: 30000 });
        await this.addKeywordInput.click({ timeout: 60000 })
        await this.addKeywordInput.fill(addKeywordInput)
        await this.addKeyword.click({ timeout: 15000 })
        await this.saveProduct.click();
    }
}
