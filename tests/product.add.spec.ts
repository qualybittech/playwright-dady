import { test, expect } from '@playwright/test';
import { Product } from '../models/productManagement';
import { HomePage } from '../models/homePage';
import { LoginPage } from '../models/login';
import { getTestData } from '../utils/helper';
import { CommonPage } from '../models/common';


test.describe('Tests', () => {
  let commonPage: CommonPage;
  let productPage: Product;
  let loginPage: LoginPage;
  let homePage: HomePage;
  let data: any;

  test.beforeEach(async ({ page }) => {
    commonPage = new CommonPage(page);
    productPage = new Product(page); 
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);     
    data = getTestData();         
  });


  test('should add a product successfully', async () => {
    
    await loginPage.login(data.login.username, data.login.password);
    
    await commonPage.navigateToProductManagement();

    await productPage.productDetails(data.productDetails.productCode,data.productDetails.productDescription,
      data.productDetails.upcCode,data.productDetails.eanCode,data.productDetails.skuType,data.productDetails.unitCount,
      data.productDetails.unitName,data.productDetails.selectProductType,data.productDetails.selectProductSubType,
      data.productDetails.purchaseDescription); 

    await productPage.otherInfo(data.productDetails.choosePreferedVendor,data.productDetails.customProductFor,
      data.productDetails.saleable,data.productDetails.markasFavorite,data.productDetails.isaRawMaterial,
      data.productDetails.isaSupplies,data.productDetails.isaPackaging,data.productDetails.isCustomizable,
      data.productDetails.displayInQuickCheckout)
    
    await productPage.addInventory(data.productDetails.inventory, data.productDetails.inventoryType, 
      data.productDetails.openingInventory,data.productDetails.inventoryLocation,data.productDetails.addedBy,
      data.productDetails.addedOn,data.productDetails.showLiveInventory,data.productDetails.greaterThanQty,
      data.productDetails.custominventoryType)

    //await productPage.productAttr(data.productDetails.productAttributes)
    
  /*  
    
    
   // 

    await productPage.packageDetailsInput(data.productDetails.mqo,data.productDetails.mqs);
    await productPage.pricing(data.productDetails.unit,data.productDetails.decimal,data.productDetails.skuBuyerDecimal,data.productDetails.skuBuyerMargin);
    await productPage.other(data.productDetails.addKeywordInput);*/

  });
});