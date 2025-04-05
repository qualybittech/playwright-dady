
function waitForElement(selector: string, page: any, timeout: number = 5000) {
    return page.waitForSelector(selector, { timeout });
}

function generateRandomEmail(domain: string = 'example.com'): string {
    const randomString = Math.random().toString(36).substring(2, 15);
    return `${randomString}@${domain}`;
}

function generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

export { waitForElement, generateRandomEmail, generateRandomString };