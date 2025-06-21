import * as XLSX from 'xlsx';
import * as fs from 'fs';

export function extractExcelDataToJson(excelFilePath: string, jsonOutputPath: string) {
  // Read the Excel file
  const workbook = XLSX.readFile(excelFilePath);
  // Get the first sheet name
  const sheetName = workbook.SheetNames[0];
  // Get the worksheet
  const worksheet = workbook.Sheets[sheetName];
  // Convert to JSON
  const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

  // Write JSON to file
  fs.writeFileSync(jsonOutputPath, JSON.stringify(jsonData, null, 2), 'utf-8');
  console.log(`Excel data extracted to ${jsonOutputPath}`);
}