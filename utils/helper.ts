import imaps from 'imap-simple';
import { simpleParser } from 'mailparser';
import { extractExcelDataToJson, extractAllSheetsToJson, extractSpecificSheets, getExcelSheetInfo } from './excel';
import { EnvironmentManager, getEnvironmentConfig } from './environmentManager';

function getTestData(){
    const envManager = EnvironmentManager.getInstance();
    const environment = envManager.getEnvironmentName();
    
    // Load product details if available
    if (environment === 'prod') {
        const path = `./testData/${environment}`;
        // Use the updated function that skips the header row
        extractAllSheetsToJson(`${path}/productTemplate.xlsx`, `${path}/productDetails.json`);
        const data = readDataFromJsonFile(`${path}/productDetails.json`);
        return data;
    } else {
        return envManager.getConfig();
    }
}

function getTestDataFromAllSheets(){
    const envManager = EnvironmentManager.getInstance();
    const environment = envManager.getEnvironmentName();
    const path = `./testData/${environment}`;
    
    // Extract all sheets from Excel file
    const allSheetsData = extractAllSheetsToJson(`${path}/productTemplate.xlsx`, `${path}/allSheetsData.json`);
    return allSheetsData;
}

function getTestDataFromSpecificSheets(sheetNames: string[]){
    const envManager = EnvironmentManager.getInstance();
    const environment = envManager.getEnvironmentName();
    const path = `./testData/${environment}`;
    
    // Extract specific sheets from Excel file
    const selectedSheetsData = extractSpecificSheets(`${path}/productTemplate.xlsx`, `${path}/selectedSheetsData.json`, sheetNames);
    return selectedSheetsData;
}

function getExcelInfo(excelFilePath: string) {
    return getExcelSheetInfo(excelFilePath);
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
    return EnvironmentManager.getInstance().getEnvironmentName();
}
function waitForElement(selector: string, page: any, timeout: number = 5000) {
    return page.waitForSelector(selector, { timeout });
}

function generateRandomEmail(domain: string = 'example.com'): string {
    const randomString = Math.random().toString(36).substring(2, 15);
    return `${randomString}@${domain}`;
}

function generateRandomEmailWithNumber(domain = 'gmail.com') {
    const randomNum = Math.floor(Math.random() * 1000); // 0 to 999999
    return `baburgn14+${randomNum}@${domain}`;
  }
  

function generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function generateRandomName() {
    const firstNames = ['Luna', 'Jack', 'Ava', 'Noah', 'Mia', 'Leo', 'Zoe', 'Max'];
    const lastNames = ['Taylor', 'Morgan', 'Bailey', 'Rivera', 'Campbell', 'Adams', 'Gray', 'Bennett'];
  
    const first = firstNames[Math.floor(Math.random() * firstNames.length)];
    const last = lastNames[Math.floor(Math.random() * lastNames.length)];
  
    const uniqueSuffix = Math.random().toString(36).substring(2, 8); // random 6-char alphanumeric
  
    return `${first}${last}${uniqueSuffix}`;
  }

  function generateUPC(): string {
  const digits: number[] = [];
  // Generate first 11 digits randomly
  for (let i = 0; i < 11; i++) {
    digits.push(Math.floor(Math.random() * 10));
  }

  // Calculate check digit
  const oddSum = digits
    .filter((_, i) => i % 2 === 0)
    .reduce((acc, num) => acc + num, 0);
  const evenSum = digits
    .filter((_, i) => i % 2 === 1)
    .reduce((acc, num) => acc + num, 0);

  const total = (oddSum * 3) + evenSum;
  const checkDigit = (10 - (total % 10)) % 10;

  digits.push(checkDigit);

  return digits.join('');
}

// utils/codeGenerator.ts

function generateEAN13(): string {
  let ean = '';

  // Generate the first 12 digits
  for (let i = 0; i < 12; i++) {
    ean += Math.floor(Math.random() * 10);
  }

  // Calculate the check digit (13th digit)
  const digits = ean.split('').map(Number);
  const sum = digits.reduce((acc, digit, idx) => {
    return acc + digit * (idx % 2 === 0 ? 1 : 3);
  }, 0);

  const checkDigit = (10 - (sum % 10)) % 10;
  return ean + checkDigit.toString();
}


  function generateRandomNumber(min = 0, max = 1000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
    
  async function getOtpFromGmail(): Promise<string> {
    const config = {
      imap: {
        user: generateRandomEmailWithNumber(),
        password: 'tyawwyhiqgzvefxg',
        host: 'imap.gmail.com',
        port: 993,
        tls: true,
        tlsOptions: {
            servername: 'imap.gmail.com', 
          },
        authTimeout: 300000,
      }
    };
  
    const connection = await imaps.connect(config);
    await connection.openBox('INBOX');
  
    const searchCriteria = ['UNSEEN', ['SINCE', new Date(Date.now() - 10 * 60 * 1000).toUTCString()]];
    const fetchOptions = { bodies: ['HEADER', 'TEXT'], markSeen: true };
  
    const messages = await connection.search(searchCriteria, fetchOptions);
  
    for (const message of messages.reverse()) {
      const part = message.parts.find(p => p.which === 'TEXT');
      if (!part) continue;
  
      const parsed = await simpleParser(part.body);
      const text = parsed.text || parsed.html || '';
  
      const otpMatch = text.match(/\b\d{6}\b/);
      if (otpMatch) {
        await connection.end();
        return otpMatch[0]; //  Always returns a string here
      }
      console.log(`Checking message from: ${parsed.from?.text}`);
      console.log(`Subject: ${parsed.subject}`);
      console.log(`Body: ${text}`);

    }
  
    await connection.end();
    throw new Error('OTP not found in recent Gmail messages'); //  or throws

    
  }
export { 
  waitForElement, 
  generateRandomEmail, 
  generateRandomString,
  getTestData,
  getTestDataFromAllSheets,
  getTestDataFromSpecificSheets,
  getExcelInfo,
  generateRandomName,
  generateUPC,
  generateRandomNumber,
  generateEAN13,
  generateRandomEmailWithNumber,
  getOtpFromGmail 
};