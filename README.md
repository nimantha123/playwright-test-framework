# Playwright Automation Framework

## Overview

This project is a scalable UI test automation framework built using Playwright with Node.js and JavaScript.

It is designed with a focus on clean architecture, maintainability, and real world usability rather than just writing basic Playwright test scripts.

The framework demonstrates how Playwright can be structured for medium to large scale automation projects using best practices like Page Object Model (POM), reusable fixtures, and centralized test data.

---

## Tech Stack

* Playwright
* JavaScript (Node.js)
* Git
* GitHub

---

## Key Objectives

* Learn Playwright using JavaScript
* Design a maintainable and scalable automation framework
* Apply real world QA automation best practices
* Avoid hard coded data and credentials

---

## Project Structure

```
.
├── pages/           # Page Objects (UI locators and actions)
├── tests/           # Test scenarios
├── fixtures/        # Playwright fixtures and reusable setup
├── test-data/       # Test data and inputs
├── playwright.config.js
├── package.json
└── .gitignore
```

---

## Architecture Approach

### Page Objects (pages)

* Encapsulate UI locators and actions
* Interact directly with Playwright Page
* Keep test logic separate from UI logic

### Tests (tests)

* Contain test scenarios and assertions
* Use page objects to perform actions
* Focus only on validation and flow

### Fixtures (fixtures)

* Provide reusable setup and shared logic
* Help reduce duplication across tests

### Test Data (test-data)

* Centralized location for test inputs
* Avoids hardcoding values inside test scripts

---

## Environment Configuration

Sensitive data such as URLs and credentials can be stored using environment variables.

Example:

```
BASE_URL=https://example.com   # Replace with your environment URL
USERNAME=example_user         # Replce username
PASSWORD=example_password     # Replace password
```

These values can be accessed in the framework using:

```
process.env
```

Note: `.env` is ignored from version control.

---

## Running the Tests

### Install dependencies

```
npm install
```

### Install Playwright browsers

```
npx playwright install
```

### Run all tests

```
npx playwright test
```

### Run in headed mode

```
npx playwright test --headed
```

### Run specific test

```
npx playwright test tests/example.spec.js
```

---

## Reporting

Playwright generates an HTML report after execution:

```
npx playwright show-report
```

---

## Best Practices Applied

* Page Object Model (POM)
* Separation of concerns (tests, pages, data)
* Reusable fixtures
* Clean folder structure
* Version control using Git

---

## Author

Nimantha Jayawardana