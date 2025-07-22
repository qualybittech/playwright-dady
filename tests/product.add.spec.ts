import { test, expect } from '@playwright/test';
import { Product } from '../models/productManagement';
import { HomePage } from '../models/homePage';
import { LoginPage } from '../models/login';
import { getTestData, setTestData } from '../utils/helper';
import { CommonPage } from '../models/common';
import { extractExcelDataToJson } from '../utils/excel';
import { Templates } from '../models/productTemplate';
import { EnvironmentManager } from '../utils/environmentManager';


test.describe('Tests', () => {
  let commonPage: CommonPage;
  let productPage: Product;
  let loginPage: LoginPage;
  let homePage: HomePage;
  let data: any;
  let templatePage: Templates;
  let loginCreds: any;
  let envManager: EnvironmentManager;

  test.beforeAll(async () => {
    envManager = EnvironmentManager.getInstance();
    loginCreds = envManager.getLoginCredentials();
    setTestData();
  });

  test.beforeEach(async ({ page }) => {
    commonPage = new CommonPage(page);
    productPage = new Product(page); 
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);   
    templatePage = new Templates(page);
  });

   //test.describe.parallel('Product Tests', () => {
      // Method 1: Run test for each product in the data array
    data = getTestData();
    data.productDetails.forEach((productData: any, index: number) => {
        test(`To add a product details successfully - Dataset ${index + 1} (${productData.ProductCode})`, async () => {
        //test(`To add a product details successfully - Dataset`, async () => {
  
      await loginPage.login(loginCreds.username, loginCreds.password, loginCreds.bussinessAccount);
      
      // Access current iteration data
      /*console.log(`=== Running Test for Dataset ${index + 1} ===`);
      console.log("Product Code:", productData.ProductCode);
      console.log("Product Description:", productData?.ProductDescription);
      console.log("UPC Code:", productData?.UPCCode);
      console.log("Product Type:", productData?.ProductType);*/
    
      await commonPage.navigateToProductManagement();

      /*await productPage.productDetails('1234','test','12346789789','12346789789',
      'UNIT','Corrugated Box','unit','','','12346789789');*/
 
      await productPage.productDetails(productData.ProductCode,productData.ProductDescription,
        productData.UPCCode,productData.EANCode,productData.SKUType,productData.UnitCountSKU,
        productData.UnitName,productData.ProductType,productData.ProductSubtype,
        productData.ProductDescription); 

        console.log("vendor",productData.choosepreferedvendor)
        console.log("custom",productData.customProductFor)

      await productPage.otherInfo(productData.choosepreferedvendor,productData.customProductFor,
        productData.saleable,productData.markasFavorite,productData.isaRawMaterial,
        productData.isaSupplies,productData.isaPackaging,productData.isCustomizable,
        productData.displayInQuickCheckout)
      
      await productPage.productAttribute(productData.productAttributes)

      console.log("openining inventory",productData.openingInventory)
      console.log("inventoryType",productData.inventoryType)
      console.log("inventoryLocation",productData.inventoryLocation)
      console.log("addedon",productData.addedOn)
      console.log("addedby",productData.addedBy)
      console.log("LiveINventory",productData.showLiveInventory)
      console.log("greater",productData.greaterThanQty)
      console.log("custom",productData.customInventoryType)


      //await productPage.addInventory('123','UNIT','chennai','surchay','2023-12-01','','2','UNIT')
      await productPage.addInventory(productData.openingInventory, productData.inventoryType, 
        productData.inventoryLocation,productData.addedBy,
        productData.addedOn,productData.showLiveInventory,productData.greaterThanQty,
        productData.customInventoryType)

      console.log(productData.openingInventory)
      console.log(productData.inventoryType)

      console.log("packageAttributes",productData.packageAttributes)
      console.log("mpo",productData.mpo)

     /*await productPage.packageDetailsInput(data.productDetails.packageAttributes,data.productDetails.mqo,
          data.productDetails.mqs,data.productDetails.stackable);   */ 
      

      // await productPage.packageDetailsInput('','','','')

       console.log("unitMargin",productData.unitBuyerMargin)
       console.log("unitDecimal",productData.unitBuyerDecimal)
        console.log("unitButMargn",productData.unitBuyerMargin)
        console.log("skuDecimal",productData.skuBuyerDecimal)
        console.log("sjkuMargin",productData.skuBuyerMargin)
        console.log("palletMargn",productData.palletBuyerMargin)
     //  await productPage.pricing('11','13','12','10','10','12','08','09')
       //await productPage.other('mfr')
      await productPage.pricing(productData.unitBuyerMargin,productData.unitBuyerDecimal,
        productData.skuBuyerMargin,productData.skuBuyerDecimal,productData.palletBuyerMargin,
        productData.palletBuyerDecimal,productData.containerBuyerMargin,productData.containerBuyerDecimal)
       console.log("productDetails",productData.containerBuyerDecimal)
       console.log("untBuy",productData.unitBuyerMargin)
        console.log("addKeywordInput",productData.addKeywordInput)

       await productPage.other(productData.addKeywordInput)
       console.log("addKeywordInput",productData.addKeywordInput)
       console.log("density",productData.templateDenisty)
       console.log("cost",productData.templateCost)
      await productPage.verifyProductPricing(productData.templateCost,productData.templateDenisty);

  });
  });
//});
   /*test('To add a product template successfully', async () =>{
    await loginPage.login(data.login.username, data.login.password);
    
    //await commonPage.navigateToProductManagement();
    await commonPage.navigateToTemplate();

    await templatePage.templateInfo()

   })*/
});