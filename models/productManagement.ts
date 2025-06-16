import { PageObjectModel } from "./pageObjectModel";
import { Locator, Page, expect } from '@playwright/test';
import { generateRandomName } from '../utils/helper';

export class Product extends PageObjectModel {

  // Locators for Product information section
  addProduct: Locator;
  productCode: Locator;
  productDescription: Locator;
  upcCode: Locator;
  eanCode: Locator;
  skuType: Locator;
  unitCount: Locator;
  unitName: Locator;
  selectProductType: Locator;
  selectProductSubType: Locator;
  purchaseDescription: Locator;

  // Locators for other details sections
  choosePreferedVendor: Locator; 
  customProductFor: Locator;
  sealable: Locator; 
  nonSealable: Locator;
  isFavourite: Locator; 
  isRawMaterial: Locator; 
  isSupplies: Locator; 
  isPackagingMaterial: Locator; 
  isCustomizable: Locator; 
  isQuickCheckoutEligible: Locator;
  purchase: Locator;
  price: Locator;

  // Locators for Product attributes section
  selectProductunit: Locator;
  USDMT: Locator;
  USDMTSelect: Locator;

  // Locators for Inventory section
  inventoryAddedBy: Locator;
  inventoryAddedOn: Locator;
  showLiveInventory: Locator;
  showGreaterThan: Locator;
  greaterThanQty: Locator;
  customInventoryType: Locator;

  productInformationAdd: Locator;
  saveProduct: Locator;
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

  constructor(page: Page) {
    super(page);

    this.addProduct = this.page.getByRole('button', { name: 'Add Product' });

    // Locators for Product information section
    this.productCode = this.page.locator('input[ng-reflect-name="productCode"]');
    this.productDescription = this.page.locator('input[ng-reflect-name="description"]')
    this.upcCode = this.page.locator('input[ng-reflect-name="upcCode"]');
    this.eanCode = this.page.locator('input[ng-reflect-name="eanCode"]');    
    this.skuType = this.page.locator('select[ng-reflect-name="skuName"]');
    this.unitCount = this.page.locator('input[ng-reflect-name="unitCount"]');
    this.unitName = this.page.locator('input[ng-reflect-name="unitName"]');
    this.selectProductType = this.page.locator('input#yesno').first();
    this.selectProductSubType = this.page.locator('input#yesno').nth(1);
    this.purchaseDescription = this.page.locator('input[ng-reflect-name="purchaseDescription"]');

    // Locators for other details sections
    this.choosePreferedVendor = this.page.locator('input#yesno').nth(2);
    this.customProductFor = this.page.locator('input#yesno').nth(2);
    this.sealable = this.page.locator('button').filter({ hasText: ' Saleable ' }).first();
    this.nonSealable = this.page.locator('button').filter({ hasText: ' Non-Saleable ' }).first();
    this.isFavourite = this.page.locator('#isFavourite')
    this.isRawMaterial = this.page.locator('#isRawMaterial')
    this.isSupplies = this.page.locator('#isSupplies')
    this.isPackagingMaterial = this.page.locator('#isPackagingMaterial')
    this.isCustomizable = this.page.locator('input[ng-reflect-name="isCustomizable"]')
    this.isQuickCheckoutEligible = this.page.locator('input[ng-reflect-name="isQuickCheckoutEligible"]')
    
    // Locators for Product attributes section
    this.productAttributes = this.page.locator('input[ng-reflect-name="isProductAttributes"]');
    this.selectProductunit = this.page.locator('input#yesno').nth(4);
    this.USDMT = this.page.locator('label').filter({hasText: ' USD/MT'}).first().locator('..').locator('input');
    this.USDMTSelect = this.page.locator('label').filter({hasText: ' USD/MT'}).first().locator('..').locator('select');

    // Locators for Inventory section
    this.openingInventory=this.page.locator('input[ng-reflect-name="openingInventory"]')
    this.inventorySelect  = this.page.locator('select[ng-reflect-name="inventoryType"]')
	  this.inventoryLocation =this.page.locator('input[ng-reflect-name="inventoryLocation"]')
    this.inventoryAddedBy =this.page.locator('input[ng-reflect-name="inventoryAddedBy"]')
    this.inventoryAddedOn =this.page.locator('input[name=inventoryAddedOn]')
    this.showLiveInventory = this.page.locator('button').filter({ hasText: ' Show Live Inventory ' }).first();
    this.showGreaterThan = this.page.locator('button').filter({ hasText: ' Show greater than ' }).first();
    this.greaterThanQty =this.page.locator('input[ng-reflect-name="customInventoryValue"]')
    this.customInventoryType =this.page.locator('select[ng-reflect-name="customInventoryType"]')
    
    
	  this.addedBy=this.page.getByRole('region', { name: 'Inventory (You can not enable' }).getByRole('textbox').nth(1)
    

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

    
    this.packageAttributes = this.page.locator('input[ng-reflect-name="isPackageAttributes"]');
	  this.inventory = this.page.locator('input[ng-reflect-name="isProductAttributes"]')
    this.productAttributeInput = this.page.getByRole('region', { name: 'Product Unit : Wt/Unit : 0.' }).locator('#yesno')
    this.productAdd = this.page.locator('#pAttribute')
    this.addAttributes = this.page.getByLabel('Product Unit : Wt/Unit : 0.').getByRole('button', { name: 'Add' })
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
    

  }
  
  // Method to add product details
  async productDetails(productCode,productDescription,upcCode,eanCode,skuType,unitCount,unitName,
    selectProductType,selectProductSubType,purchaseDescription) {

    await this.addProduct.waitFor({ state: 'visible', timeout: 15000 })
    await this.addProduct.click();

    await this.productCode.fill(productCode);
    await this.productDescription.fill(productDescription);
    await this.upcCode.fill(upcCode);
    await this.eanCode.fill(eanCode);  
    await this.skuType.selectOption(skuType);    

    await this.unitCount.fill(unitCount);
    await this.unitName.fill(unitName)

    await this.selectProductType.click();
    await this.page.locator('span').filter({ hasText: selectProductType }).first().click();

    await this.selectProductSubType.click();
    await this.page.locator('span').filter({ hasText: selectProductSubType }).first().click();
    
    await this.purchaseDescription.fill(purchaseDescription)

  }

  // Method to fill other product details information
  async otherInfo(choosePreferedVendor,customProductFor,saleable,markasFavorite,
      isaRawMaterial,isaSupplies,isaPackaging,isCustomizable,displayInQuickCheckout
    ){
    await this.choosePreferedVendor.click()
    await this.page.locator('span').filter({ hasText: choosePreferedVendor }).first().click();
    
    if (customProductFor !== '') {
      await this.customProductFor.click();
      await this.page.locator('span').filter({ hasText: customProductFor }).first().click();
    }
    if (saleable === 'true') {
      await this.sealable.click();
    } else {
      await this.nonSealable.click();
    }

    if(markasFavorite === 'true') {
      await this.isFavourite.check();
    }

    if (isaRawMaterial === 'true') {
      await this.isRawMaterial.check();
    }

    if (isaSupplies === 'true') {
      await this.isSupplies.check();
    }

    if (isaPackaging === 'true') {
    await this.isPackagingMaterial.check();
    } 

    if (isCustomizable === 'true') {
    await this.isCustomizable.check({ timeout: 15000 });
    }
    
    if (displayInQuickCheckout === 'true') {
    await this.isQuickCheckoutEligible.check({ timeout: 15000 });
    }

    }
    
  // Method to fill product attributes
   async productAttr(productAttributes){
    
    if (productAttributes.productAttributes === 'true') {
      await this.productAttributes.check();
 
      // Get all keys ending with 'Unit'
      const unitKeys = Object.keys(productAttributes).filter(key => key.endsWith('Unit'));

      // Count attributes excluding those ending with 'Unit'
      const count = Object.keys(productAttributes).filter(key => !unitKeys.includes(key)).length;

      for (let i = 1; i < count/2; i+2) {
        
        await this.selectProductunit.click();
        //await this.page.locator('span').filter({ hasText: selectProductType }).first().click();
        await this.USDMT.fill('1000');
        await this.USDMTSelect.selectOption('USD/mt');
      }


    
 /*

    await this.bodyLength.fill(bodyLength)    
    await this.bodyWidth.fill(bodyWidth)    
    await this.bodySurfaceArea.fill(bodySurfaceArea)    
    await this.bodyWeight.fill(bodyWeight)    
    await this.Weight.fill(Weight)    
    await this.width.fill(width)    
    await this.length.fill(length)    
    await this.cost.fill(cost)    
    await this.volume.fill(volume)
     await this.netCost.fill(netCost)    
    await this.netWeight.fill(netWeight)  */
    }
  }
    
async addInventory(inventory,inventoryType,openingInventory,inventoryLocation,
  addedBy,addedOn,showLiveInventory,greaterThanQty,customInventoryType) {
    
//  await this.inventory.waitFor({ state: 'visible', timeout: 15000 });
  if( inventory === 'true') {
    await this.inventory.check();

    await this.openingInventory.fill(openingInventory)    
    await this.inventorySelect.selectOption(inventoryType);
    await this.page.waitForTimeout(2000);
    await this.inventoryLocation.fill(inventoryLocation)
    await this.addedBy.fill(addedBy)
    await this.inventoryAddedOn.fill(addedOn)
      if(showLiveInventory !== 'true') {
        await this.showGreaterThan.click();
        await this.greaterThanQty.fill(greaterThanQty)
        await this.customInventoryType.selectOption(customInventoryType);
      }
    
  
  }
};

    async packageDetailsInput(mqo,mqs) {
    await this.packageAttributes.waitFor({ state: 'visible', timeout: 15000 });
    await this.packageAttributes.check();
    await this.packageDetails.click({ timeout: 15000 });
    await this.mqo.click({ timeout: 60000 });
    await this.mqo.fill(mqo)
    await this.mqs.fill(mqs)
    }

    async pricing(unit,decimal,skuBuyerMargin,skuBuyerDecimal){
        await this.pricingDetails.click({ timeout: 15000 })
        await this.unit.fill(unit)
        await this.decimal.fill(decimal)
        await this.skuBuyerMargin.fill(skuBuyerMargin)
        await this.skuBuyerDecimal.fill(skuBuyerDecimal)
    }

    async other(addKeywordInput){
        await this.otherDetails.click({ timeout: 30000 });
        await this.addKeywordInput.click({ timeout: 60000 })
        await this.addKeywordInput.fill(addKeywordInput)
        await this.addKeyword.click({ timeout: 15000 })
       // await this.publish.click();
    }
}
