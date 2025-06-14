import { test, expect } from '@playwright/test';
import { AddProduct } from '../models/product';
import { HomePage } from '../models/homePage';
import { LoginPage } from '../models/login';
import { getTestData } from '../utils/helper';


test.describe('Tests', () => {
  let addProduct: AddProduct;
  let loginPage: LoginPage;
  let homePage: HomePage;
  let data: any;

  test.beforeEach(async ({ page }) => {
    addProduct = new AddProduct(page); 
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);     
    data = getTestData();
                
  });


  test('should add a product successfully', async () => {
      test.setTimeout(600000);
    await loginPage.login(data.login.username, data.login.password);
    
    await addProduct.part(data.productDescription.productAttributes,data.productDescription.productCode,data.productDescription.productDescription,data.productDescription.upcCode,data.productDescription.eanCode,data.productDescription.skuType,data.productDescription.unitCount,data.productDescription.unitName,data.productDescription.purchaseDescription,data.productDescription.selectProductType,
data.productDescription.selectProductSubType); 
    await addProduct.addInventory(data.productDescription.openingInventory,data.productDescription.inventoryLocation,data.productDescription.addedBy,data.productDescription.inventorySelect)
    await addProduct.otherInfo(data.productDescription.choosePreferedVendor,data.productDescription.customProductFor,data.productDescription.productAttributesCheck,data.productDescription.productAttributesfavourite,data.productDescription.CheckedSupplies,data.productDescription.checkedRaw,data.productDescription.checkedCustomize,data.productDescription.checkedPackaging,data.productDescription.checkedQuickCheckout,data.productDescription.checkedPurchase,data.productDescription.price)
   // await addProduct.productAttr(data.productDescription.netCost,data.productDescription.netWeight,data.productDescription.bodyLength,data.productDescription.bodyWidth,data.productDescription.bodySurfaceArea,data.productDescription.bodyWeight,data.productDescription.Weight,data.productDescription.width,length,data.productDescription.cost,data.productDescription.volume)

    await addProduct.packageDetailsInput(data.productDescription.mqo,data.productDescription.mqs);
    await addProduct.pricing(data.productDescription.unit,data.productDescription.decimal,data.productDescription.skuBuyerDecimal,data.productDescription.skuBuyerMargin);
    await addProduct.other(data.productDescription.addKeywordInput);

  });
});