# Cypress Automation Project for DemoBlaze

This project automates testing for the [DemoBlaze website](https://www.demoblaze.com/), including functionalities like user registration, login, adding products to the cart, placing orders, and verifying category pages.

---

## **Project Structure**
The project follows a modular structure to ensure scalability and maintainability:


### **Directories**

1. **cypress/e2e**:
   - Contains test files for each functionality 
   - `user-registration-login.cy.js`, `category-pages.cy.js`, `place-order.cy.js`,`product-add-to-cart.cy.js`.

2. **cypress/fixtures**:
   - Holds test data in JSON format.
   -  `credentials.json`, `categories.json`,`productData.json`, `orderDetails.json`

3. **cypress/support**:
   - Includes reusable custom commands and helper utilities.
   - `commands.js`.

4. **cypress.config.js**:
   - Configuration file for Cypress settings (e.g., base URL, viewport settings).

---

## **Installation and Setup**

### Prerequisites
- Node.js (version v18.12.0 or later)
- npm (Node Package Manager)

### Steps
1. Download the repository into zip file

2. Extract Zip file

3. Open cmd into the project folder and Install dependencies:
npm install

4. Open Cypress
 npx cypress open

5. Run the tests:
Select the desired spec file from the Cypress Test Runner.

7. Run tests from CLI
   npx cypress run

Test Cases
1. User Signup and Login
File: user-registration-login.cy.js
Automates the following:
User signup with a randomly generated username.
Login with the same username.
Verifies user visibility on successful login.

2. Add to Cart
File: product-add-to-cart.cy.js
Automates the following:
open demoblaze website
Clicking on a product.
Adding it to the cart.
Verifying the success message after add to cart.

3. Place Order
File: place-order.cy.js
Automates the following:
open demoblaze website
Adding a product to the cart.
Placing an order by filling out customer details.
Verifying the success message after purchase.

4. Verify Category Pages
File: category-pages.cy.js
Automates the following:
Clicking on Phones, Laptops, and Monitors categories.
Verifying that the correct products are displayed on each page.

### Customization
Base URL Configuration:

Update the baseUrl in cypress.config.js:

e2e: {
  baseUrl: 'https://www.demoblaze.com',
}

Test Data:
Update the data in the fixtures folder (e.g., credentials.json, categories.json).

### Dependencies
Cypress: ^13.16.0
Other dependencies can be found in package.json.


### Mochawesome Reports
This project uses Mochawesome to generate detailed and visually appealing HTML and JSON reports for Cypress tests. After running the tests in headless mode with npx cypress run, the reports are automatically saved in the cypress/reports directory.

HTML Report: Provides a comprehensive overview of the test results, including pass/fail status, charts, and detailed failure information.
JSON Report: Contains raw test result data for further processing or merging.
To view the report, simply open the index.html file located in the cypress/reports folder.

