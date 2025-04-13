//import { type Locator, type Page ,type expect} from '@playwright/test';
import { PageObjectModel } from "./pageObjectModel";

export class LoginPage  extends PageObjectModel {
    emailInput = this.page.getByRole('textbox', { name: 'Email ID' });
    passwordInput = this.page.getByRole('textbox', { name: 'Password' });
    signInButton = this.page.getByRole('button', { name: 'Sign In' });
    continueButton = this.page.getByRole('button', { name: 'Continue' });
    unauthorisedMessage = this.page.locator('text=Unauthorized');

    async navigateTo(url: string) {
        await this.page.goto(this.data.URL);
    }   

    async login(email, password) {
        await console.log(process.env.URL)
        await this.navigateTo(process.env.URL || '');
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click(); 
        // Only for multiple account login
            if(await this.page.locator('a').filter({ hasText: email }).isVisible()) {
                await this.page.locator('a').filter({ hasText: email }).click();
                await this.continueButton.click();
            }
    }
}