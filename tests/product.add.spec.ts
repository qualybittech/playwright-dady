import { test, expect } from '@playwright/test';
import { AddProduct } from '../models/product';
import { HomePage } from '../models/homePage';
import { LoginPage } from '../models/login';


test.describe('Tests', () => {
  let addProduct: AddProduct;
  let loginPage: LoginPage;
  let homePage: HomePage;
  let data: any;

  test.beforeEach(async ({ page }) => {
    addProduct = new AddProduct(page); 
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);     
                
  });

  test('should add a product successfully', async () => {
    await loginPage.login('baburgn12@gmail.com', 'Celerio@3535');

    await addProduct.part('Test product 12','Test product purpose','123','45','5','purchase description','12','india','bharath','10','12'); 
    await addProduct.package('456','457');
    await addProduct.pricing('50','0.50','35','0.25');
    await addProduct.other('manufacturer');

  });
});