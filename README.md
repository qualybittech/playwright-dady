# playwright-dady

 Playwright framework project for running web application tests with multi-environment support and data-driven testing capabilities.

## Features

- ✅ Multi-environment support (dev, staging, prod)
- ✅ Data-driven testing with Excel files
- ✅ Page Object Model implementation
- ✅ Environment-specific configuration management
- ✅ Comprehensive test reporting

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

## Installation

```bash
npm install
```

## Environment Configuration

### Setting Environment Variables

**Windows (PowerShell):**
```powershell
$Env:ENV="dev"
# or
$Env:ENV="prod"
```

**Linux/Mac:**
```bash
export ENV=dev
# or
export ENV=staging
# or
export ENV=prod
```

### Running Tests with Environment

```bash
# Using environment variable
ENV=dev npx playwright test

# Using command line argument
npx playwright test --env=dev
npx playwright test --env=staging
npx playwright test --env=prod
```

## Running Tests

### Basic Commands

```bash
# Run all tests
npx playwright test

# Run tests in interactive UI mode
npx playwright test --ui

# Run tests on specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

# Run tests in a specific file
npx playwright test tests/example.spec.ts

# Run tests in debug mode
npx playwright test --debug

# Run tests with specific tag
npx playwright test --grep "@smoke"
```

### Advanced Commands

```bash
# Run tests in headed mode
npx playwright test --headed

# Run tests with specific number of workers
npx playwright test --workers=4

# Generate test code
npx playwright codegen

# Show test report
npx playwright show-report
```

## Project Structure

```
├── models/                 # Page Object Models
├── tests/                  # Test files
├── testData/              # Environment-specific test data
│   ├── dev/
│   └── prod/
├── utils/                 # Utility functions
├── playwright-report/     # Test reports
└── test-results/         # Test artifacts
```

## Configuration

The project uses TypeScript configuration and Playwright config files:
- [`playwright.config.ts`](playwright.config.ts) - Main Playwright configuration
- [`tsconfig.json`](tsconfig.json) - TypeScript configuration

## Reporting

After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests to ensure everything works
5. Submit a pull request

## License

This project is licensed under the ISC License.