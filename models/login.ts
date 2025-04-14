//import { type Locator, type Page ,type expect} from '@playwright/test';
import { PageObjectModel } from "./pageObjectModel";

export class LoginPage  extends PageObjectModel {
    emailInput = this.page.getByRole('textbox', { name: 'Email ID' });
    passwordInput = this.page.getByRole('textbox', { name: 'Password' });
    signInButton = this.page.getByRole('button', { name: 'Sign In' });
    continueButton = this.page.getByRole('button', { name: 'Continue' });
    unauthorisedMessage = this.page.locator('text=Unauthorized');

    async navigateTo(url: string) {
        await this.page.goto(url);
    }   

    async login(email, password) {
        await this.navigateTo(this.data.URL);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click(); 
        await this.page.waitForLoadState('networkidle'); // Wait for the page to load completely
        // Only for multiple account login
            if(await this.page.locator('a').filter({ hasText: email }).count() > 0) {
                await this.page.locator('a').filter({ hasText: email}).first().click();
                await this.continueButton.click();
            }
    }
}