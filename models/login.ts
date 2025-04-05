import { type Locator, type Page } from '@playwright/test';

export class LoginPage  {
    private page: Page;
    private emailInput: Locator;
    private passwordInput: Locator;
    private signInButton: Locator;
    private userLink: Locator;
    private continueButton: Locator;
    private brButton: Locator;
    private createBusinessAccountLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByRole('textbox', { name: 'Email ID' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
        this.userLink = page.locator('a').filter({ hasText: 'baburgn12@gmail.comADMINbsquare' });
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.brButton = page.getByRole('button', { name: 'BR' });
        this.createBusinessAccountLink = page.getByText('Create new Business Account');
    }
    async login(email, password) {
        await this.page.goto('https://www.dadyin.com/#/signin');
        await this.emailInput.click();
        await this.emailInput.fill(email);
        await this.passwordInput.click();
        await this.passwordInput.fill(password);
        await this.signInButton.click();
        await this.userLink.click();
        await this.continueButton.click();
        await this.brButton.click();
        await this.createBusinessAccountLink.click();
    }
}

export default LoginPage;