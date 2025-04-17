import { PageObjectModel } from "./pageObjectModel";
import { generateRandomEmailWithNumber } from '../utils/helper';
import { generateRandomName } from '../utils/helper';


export class SignPage  extends PageObjectModel {
    signUp = this.page.getByRole('link', { name: 'Sign up' });
    businessName = this.page.getByRole('textbox', { name: 'Business name' });
    firstName = this.page.getByRole('textbox', { name: 'First Name' });
    lastName = this.page.getByRole('textbox', { name: 'Last Name' });
    email = this.page.getByRole('textbox', { name: 'Email' });
    passWord = this.page.getByRole('textbox', { name: 'Password', exact: true });
    confirmPassword = this.page.getByRole('textbox', { name: 'Confirm Password' });
    signUpButton = this.page.getByRole('button', { name: 'Sign up', exact: true });
    enterOtp = this.page.getByRole('textbox', { name: 'Enter OTP' });
    verify = this.page.getByRole('button', { name: 'Verify' });
    enterEmail = this.page.getByRole('textbox',{name: 'Identifier'})
    enterPassword = this.page.getByRole('textbox',{name: 'Passwd'})
    

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async signUpPage() {
        await this.navigateTo(this.data.URL);
        await this.signUp.click();
        await this.businessName.click();
        await this.businessName.fill(generateRandomName());
        await this.firstName.click();
        await this.firstName.fill(generateRandomName());
        await this.lastName.click();
        await this.lastName.fill('bradman');
        await this.email.click();
        await this.email.fill(generateRandomEmailWithNumber());// ststic to dynac
        await this.passWord.click();
        await this.passWord.fill('Celerio@3535');
        await this.confirmPassword.click();
        await this.confirmPassword.fill('Celerio@3535');

        await this.signUpButton.click(); 

    }


}