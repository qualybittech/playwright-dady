import { PageObjectModel } from "./pageObjectModel";

export class HomePage extends PageObjectModel {

    brButton = this.page.getByRole('button', { name: 'BR' });
    createBusinessAccountLink = this.page.getByText('Create new Business Account');

    async logout(url: string) {
        await this.brButton.click();
        await this.createBusinessAccountLink.click();
    }
}