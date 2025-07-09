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

   test.describe.parallel('Product Tests', () => {
      // Method 1: Run test for each product in the data array
    const data = getTestData();
      data.productDetails.forEach((productData: any, index: number) => {
        test(`To add a product details successfully - Dataset ${index + 1} (${productData.ProductCode})`, async () => {
  
      //await loginPage.login(loginCreds.username, loginCreds.password, loginCreds.bussinessAccount);
      
      // Access current iteration data
      console.log(`=== Running Test for Dataset ${index + 1} ===`);
      console.log("Product Code:", productData.ProductCode);
      console.log("Product Description:", productData?.ProductDescription);
      console.log("UPC Code:", productData?.UPCCode);
      console.log("Product Type:", productData?.ProductType);
    
      /*await commonPage.navigateToProductManagement();

      await productPage.productDetails(productData.productCode,productData.productDescription,
        productData.upcCode,productData.eanCode,productData.skuType,productData.unitCount,
        productData.unitName,productData.selectProductType,productData.selectProductSubType,
        productData.purchaseDescription); 

      await productPage.otherInfo(productData.choosePreferedVendor,productData.customProductFor,
        productData.saleable,productData.markasFavorite,productData.isaRawMaterial,
        productData.isaSupplies,productData.isaPackaging,productData.isCustomizable,
        productData.displayInQuickCheckout)
      
      await productPage.productAttribute(productData.productAttributes)

      await productPage.addInventory(productData.inventory, productData.inventoryType, 
        productData.openingInventory,productData.inventoryLocation,productData.addedBy,
        productData.addedOn,productData.showLiveInventory,productData.greaterThanQty,
        productData.custominventoryType)

      await productPage.verifyProductPricing(productData.templateCost,productData.templateDenisty);*/
  });
  });
});
   /*test('To add a product template successfully', async () =>{
    await loginPage.login(data.login.username, data.login.password);
    
    //await commonPage.navigateToProductManagement();
    await commonPage.navigateToTemplate();

    await templatePage.templateInfo()

   })*/
});