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
    await loginPage.login(data.login.username, data.login.password);

    //Randomize product code 
    await addProduct.part('True','Test product 12','Test product purpose','123','45','5','purchase description','12','india','bharath','10','12'); 
    await addProduct.package('456','457');
    await addProduct.pricing('50','0.50','35','0.25');
    await addProduct.other('manufacturer');

  });
});