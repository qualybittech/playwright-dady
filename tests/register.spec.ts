import { Page, test, expect } from '@playwright/test';
import { SignPage } from '../models/register';
import { getTestData,waitForElement } from '../utils/helper';
import { HomePage } from '../models/homePage';
import { getOtpFromGmail } from '../utils/helper';

test.describe('signUp Tests', () => {
    let signPage: SignPage;
    let homePage: HomePage;
    let data: any;
    
test.beforeEach(async ({ page }) => {
    signPage = new SignPage(page);
    homePage = new HomePage(page);
    data = getTestData();
});

test('Successful signUp with', async () => {

    await signPage.signUpPage();
    await (signPage.signUpButton, { timeout:5000 });
    
    const otp = await getOtpFromGmail();
    console.log('OTP:', otp);
    expect(otp).toMatch(/^\d{6}$/);

    await signPage.enterOtp.click({ timeout:30000 });
    await signPage.enterOtp.fill(otp);
    await signPage.verify.click({ timeout:30000 })
});

})