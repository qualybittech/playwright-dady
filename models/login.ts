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

    async login(email, password,bussinessAccount) {
        await this.navigateTo(this.data.URL);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click(); 
        await this.page.waitForTimeout(2000); // Wait for 2 seconds to allow any potential redirects or loading
       
        // Check if the continue button is present, which indicates a multiple account login scenario
        //await this.page.waitForLoadState('networkidle'); // Wait for the page to load completely
        /* Only for multiple account login
            if(await this.page.locator('a').filter({ hasText: email }).count() > 0) {
                await this.page.locator('a').filter({ hasText: email}).first().click();
                await this.continueButton.click();
            }
        */
        // Wait for the card list to appear
       const cardList = this.page.locator('div.card-list');
        await cardList.waitFor();
        await this.page.waitForTimeout(6000);
        // Get all business account cards
        const cards = cardList.locator('div.businessaccount-card');
        const count = await cards.count();
        console.log(`Found ${count} business account cards.`);
        for (let i = 0; i < count; i++) {
            const card = cards.nth(i);
            // The span containing the business account name is inside: div.font-size-14.mt-2 > span.text-dark 
            const accountSpan = card.locator('div.font-size-14.mt-2');
            const text = await accountSpan.textContent();
            console.log(`Found ${text} business account name.`);

            if (text && text.trim().includes(bussinessAccount)) {
                await card.scrollIntoViewIfNeeded();
                await card.click();
                break;
            }
            // Optionally scroll to the next card (not strictly needed, but can help with visibility)
            if (i < count - 1) {
                await cards.nth(i + 1).scrollIntoViewIfNeeded();
            }
        }
        await this.continueButton.click();
        //await this.page.locator('span').filter({ hasText: bussinessAccount}).scrollIntoViewIfNeeded();
        //await this.page.locator('span').filter({ hasText: bussinessAccount}).first().click();
        
    }
}