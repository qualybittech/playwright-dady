import { Page, test, expect } from '@playwright/test';
import { LoginPage } from '../models/login';


test.describe('Login Tests', () => {
    let loginPage: LoginPage;
    
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
    });

    test('Successful login with valid credentials', async () => {
        await loginPage.login('baburgn12@gmail.com', 'Celerio@3535');
    });

    test('Unsuccessful login with invalid credentials', async () => {
        await loginPage.login('invalid@example.com', 'wrongpassword');
        // Add assertions to verify error message is displayed
        await expect(loginPage.unauthorisedMessage).toHaveCount(1);
    });
});