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
  bodyLength: Locator;
  bodyWidth: Locator;
  bodySurfaceArea: Locator;
  bodyWeight: Locator;
  patchWidth: Locator;
  patchLength: Locator;
  patchSurfaceArea: Locator;
  Weight: Locator;
  width: Locator;
  length: Locator;
  cost: Locator;
  gsm: Locator;
  density: Locator;
  volume: Locator;
  selectProductSubtype: Locator; 
  choosePreferedVendor: Locator; 
  customProductFor: Locator; 
  nonSealable: Locator;
  favourite: Locator; 
  raw: Locator; 
  supplies: Locator; 
  packaging: Locator; 
  customize: Locator; 
  quickCheckout: Locator;
  purchase: Locator;
  price: Locator;

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
    this.selectProductType = this.page.locator('.col-9 > div:nth-child(3) > div').first();
    //this.selectProductType = this.page.locator('dadyin-searchable-select').filter({ hasText: 'Select Product TypeSearch for' }).getByRole('combobox')
    this.selectProductSubType = this.page.getByRole('region', { name: 'Product Information Add' }).locator('span').nth(2);
    this.productInformationAdd = this.page.locator('div:nth-child(3) > .attribute > .attribute-input > .ng-pristine');
    this.saveProduct = this.page.getByRole('button', { name: 'Save Draft' });
    this.packageDetails = this.page.getByText('Package Details');
    this.sku = this.page.getByRole('region', { name: 'Product Information Add' }).locator('select');
    this.skuUnit = this.page.getByText('Unit Count/UNIT');
    this.unitCount = this.page.getByRole('spinbutton').nth(0)
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
    this.bodyLength = this.page.locator('.width-perc-25 > .attribute > .attribute-input > input').first()
    this.bodyWidth = this.page.locator('.d-flex > .row > div:nth-child(2) > .attribute > .attribute-input > input')
    this.bodySurfaceArea = this.page.locator('.d-flex > .row > div:nth-child(3) > .attribute > .attribute-input > input')
    this.bodyWeight = this.page.locator('.d-flex > .row > div:nth-child(4) > .attribute > .attribute-input > input')
    this.patchWidth = this.page.locator('.d-flex > .row > div:nth-child(5) > .attribute > .attribute-input > input')
    this.patchLength = this.page.locator('div:nth-child(6) > .attribute > .attribute-input > input')
    this.patchSurfaceArea = this.page.locator('div:nth-child(7) > .attribute > .attribute-input > input')
    this.Weight = this.page.locator('div:nth-child(8) > .attribute > .attribute-input > input')
    this.width = this.page.locator('div:nth-child(9) > .attribute > .attribute-input > input')
    this.length = this.page.locator('div:nth-child(10) > .attribute > .attribute-input > input')
    this.cost = this.page.locator('div:nth-child(11) > .attribute > .attribute-input > input')
    this.gsm = this.page.locator('div:nth-child(12) > .attribute > .attribute-input > input')
    this.density = this.page.locator('div:nth-child(13) > .attribute > .attribute-input > input')
    this.volume = this.page.locator('div:nth-child(14) > .attribute > .attribute-input > input')
    this.unitName = this.page.locator('div:nth-child(5) > .attribute > .attribute-input > .ng-untouched').first()
    this.purchaseDescription = this.page.locator('div:nth-child(3) > .attribute > .attribute-input > .ng-untouched').first()
    this.selectProductSubtype = this.page.locator('ng-select').filter({ hasText: 'Search for Product Sub' }).locator('span').nth(1)
    this.choosePreferedVendor = this.page.locator('ng-select').filter({ hasText: 'Search for Vendor' }).getByRole('combobox')
    this.customProductFor = this.page.locator('ng-select').filter({ hasText: 'Select Customer' }).locator('#yesno')
    this.nonSealable = this.page.getByRole('button', { name: 'Non-Saleable' })
    this.favourite = this.page.locator('#isFavourite')
    this.raw = this.page.locator('#isRawMaterial')
    this.supplies = this.page.locator('#isSupplies')
    this.packaging = this.page.locator('#isPackagingMaterial')
    this.customize = this.page.locator('div').filter({ hasText: /^Is Customizable$/ }).getByRole('checkbox')
    this.quickCheckout = this.page.locator('div').filter({ hasText: /^Display in Quick Checkout$/ }).getByRole('checkbox')
    this.purchase = this.page.locator('div').filter({ hasText: /^No Generic Purchase$/ }).getByRole('checkbox')
    this.price =  this.page.getByRole('textbox').nth(1)
  }

  async navigateTo(url: string) {
        await this.page.goto(url);
  }
  //  Method defined outside constructor
  async part(productAttributes,productCode,productDescription,upcCode,eanCode,skuType,unitCount,unitName,purchaseDescription,selectProductType,selectProductSubType) {

    await expect(this.menu).toBeVisible();
   // await this.waitForTimeout(5000); // Waits for 5 seconds
    await this.menu.waitFor({ state: 'visible', timeout: 50000 });

    await this.menu.click()
    await this.productManangement.waitFor({ state: 'visible', timeout: 15000 });
    await this.productManangement.click({ timeout: 600000 });
    await this.add.click({ timeout: 6000000 });
    await expect(this.productAttributes).toBeVisible();
    await this.productAttributes.waitFor({ state: 'visible', timeout: 15000 });
    await this.productAttributes.waitFor({ state: 'visible', timeout: 15000 });
    
    if (productAttributes === 'true') {
    await this.productAttributes.check({ timeout: 15000 });
    }
    //await this.productAttributes.check({ timeout: 600000 });
    await this.packageAttributes.waitFor({ state: 'visible', timeout: 15000 });
    await this.packageAttributes.check();
    await this.inventory.waitFor({ state: 'visible', timeout: 15000 });
    await this.inventory.check({ timeout: 600000 });
    await this.productCode.waitFor({ state: 'visible', timeout: 15000 });
    await this.productCode.click({ timeout: 1500000 });
    await this.productCode.fill(productCode);
    await this.productDescription.waitFor({ state: 'visible', timeout: 15000 });
    await this.productDescription.click();
    await this.productDescription.fill(productDescription);
    await this.upcCode.waitFor({ state: 'visible', timeout: 15000 });
    await this.upcCode.click({ timeout: 1500000 });
    await this.upcCode.fill(upcCode);
    await expect(this.eanCode).toBeVisible();
    await this.eanCode.waitFor({ state: 'visible', timeout: 15000 });
    await this.eanCode.click({ timeout: 1500000 });
    await this.eanCode.fill(eanCode);
    await this.skuType.waitFor({ state: 'visible', timeout: 15000 });
    await this.skuType.click({ timeout: 1500000 })
    await this.skuType.waitFor({ state: 'visible', timeout: 5000 });

    await this.skuType.selectOption(skuType);
    
    await this.unitCount.click({ timeout: 60000 });
    await this.unitCount.fill(unitCount);
    await this.unitName.click()
    await this.unitName.fill(unitName)
    //await this.selectProductType.click();
    //await this.selectProductType.selectOption('Plastic Raw Material');
    //await this.selectProductSubType.click()
    //await this.selectProductSubType.selectOption(selectProductSubType)
    //await this.purchaseDescription.click()
    //await this.purchaseDescription.fill(purchaseDescription)
  
  }
    

    async addInventory(openingInventory,inventoryLocation,addedBy,inventorySelect){
    await this.openingInventory.click()
    await this.openingInventory.fill(openingInventory)
    await this.inventorySelect.selectOption(inventorySelect);
    await this.inventoryLocation.click()
    await this.inventoryLocation.fill(inventoryLocation)
    await this.addedBy.click()
    await this.addedBy.fill(addedBy)};
    
    async otherInfo(choosePreferedVendor,customProductFor,productAttributesCheck,productAttributesfavourite,CheckedSupplies,checkedRaw,checkedCustomize,checkedPackaging,checkedQuickCheckout,checkedPurchase,price){
    await this.choosePreferedVendor.click()
    //await this.choosePreferedVendor.fill(choosePreferedVendor)
    //await this.customProductFor.click()
    //await this.customProductFor.fill(customProductFor)
    
    if(productAttributesCheck === 'true') {
      await this.productAttributes.check({ timeout: 15000 });
    }

    if(productAttributesfavourite === 'true') {
      await this.favourite.check({ timeout: 15000 });
    }

    if (CheckedSupplies === 'true') {
    await this.supplies.check({ timeout: 15000 });
    }

    if (checkedRaw === 'true') {
    await this.raw.check({ timeout: 15000 });
    }
    
    if (checkedPackaging === 'true') {
    await this.packaging.check({ timeout: 15000 });
    } 

    if (checkedCustomize === 'true') {
    await this.customize.check({ timeout: 15000 });
    }
    
    if (checkedQuickCheckout === 'true') {
    await this.quickCheckout.check({ timeout: 15000 });
    }

    if (checkedPurchase === 'true') {
    await this.purchase.check({ timeout: 15000 });
    }
    await this.price.click()
    await this.price.fill(price)

    }
   async productAttr(netCost,netWeight,bodyLength,bodyWidth,bodySurfaceArea,bodyWeight,Weight,width,length,cost,volume){
    await this.netCost.click();
    await this.netCost.fill(netCost)
    await this.netWeight.click();
    await this.netWeight.fill(netWeight)
    await this.bodyLength.click()
    await this.bodyLength.fill(bodyLength)
    await this.bodyWidth.click()
    await this.bodyWidth.fill(bodyWidth)
    await this.bodySurfaceArea.click()
    await this.bodySurfaceArea.fill(bodySurfaceArea)
    await this.bodyWeight.click()
    await this.bodyWeight.fill(bodyWeight)
    await this.Weight.click()
    await this.Weight.fill(Weight)
    await this.width.click()
    await this.width.fill(width)
    await this.length.click()
    await this.length.fill(length)
    await this.cost.click()
    await this.cost.fill(cost)
    await this.volume.click()
    await this.volume.fill(volume)
  }
    

    async packageDetailsInput(mqo,mqs) {
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
        

        await this.publish.click();
    }
}
