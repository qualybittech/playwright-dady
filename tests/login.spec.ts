import { Page, test, expect } from '@playwright/test';
import { LoginPage } from '../models/login';
import { getTestData } from '../utils/helper';
import { HomePage } from '../models/homepage';

test.describe('Login Tests', () => {
    let loginPage: LoginPage;
    let homePage: HomePage;
    let data: any;
    
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        data = getTestData();
    });

    test('Successful login with valid credentials', async () => {
        await loginPage.login(data.login.username, data.login.password);
        await homePage.logout();
    });

    test('Unsuccessful login with invalid credentials', async () => {
        await loginPage.login(data.invalidlogin.username, data.invalidlogin.password);
        // Add assertions to verify error message is displayed
        await expect(loginPage.unauthorisedMessage).toHaveCount(1);
    });
});