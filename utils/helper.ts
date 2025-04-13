
function getTestData(){
    let environment = getEnvVariable();
    if(environment === 'test'){
        let path = './testData/test.json';
        let data = readDataFromJsonFile(path);
        return data;
    } else if(environment === 'prod'){
        let path = './testData/prod.json';
        let data = readDataFromJsonFile(path);
        return data;
    }
}

function readDataFromJsonFile(filePath: string): any {
    const fs = require('fs');
    try {
        const rawData = fs.readFileSync(filePath, 'utf-8'); // Read file content
        return JSON.parse(rawData); // Parse and return JSON data
    } catch (error) {
        console.error(`Error reading or parsing file at ${filePath}:`, error);
        return null; // Return null in case of an error
    }
}

function getEnvVariable() {
    const environment = process.env.ENV || 'test';
    return environment;
}
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

export { waitForElement, generateRandomEmail, generateRandomString,getTestData };