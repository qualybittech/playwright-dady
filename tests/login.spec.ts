import { Page, test, expect } from '@playwright/test';
import { LoginPage } from '../models/login';
import { getTestData } from '../utils/helper';

test.describe('Login Tests', () => {
    let loginPage: LoginPage;
    let data: any;
    
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        data = getTestData();
    });

    test('Successful login with valid credentials', async () => {
        await loginPage.login(data.login.username, data.login.password);
    });

    test('Unsuccessful login with invalid credentials', async () => {
        await loginPage.login(data.invalidlogin.username, data.invalidlogin.password);
        // Add assertions to verify error message is displayed
        await expect(loginPage.unauthorisedMessage).toHaveCount(1);
    });
});