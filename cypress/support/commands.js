Cypress.Commands.add('generateRandomUsername', (baseUsername) => {
    // Generate a random number between 1000 and 9999
    const randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    return `${baseUsername}_${randomNumber}`;
  });
  // cypress/support/commands.js

Cypress.Commands.add('clickAndAddToCart', (productId) => {
    // Navigate to the product page using productId
    cy.visit(`prod.html?idp_=${productId}`);
    
    // Click the 'Add to cart' button
    cy.get('.btn.btn-success.btn-lg').click();
  
    // Handle the alert that confirms the product is added to the cart
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.include('Product added');
    });
  });
  Cypress.Commands.add('placeOrder', (customerDetails) => {
    // Open the cart
    cy.get('#cartur').click();
  
    // Click on 'Place Order'
    cy.contains('Place Order').click();
  
    // Fill in the order details
    cy.get('#name').type(customerDetails.name);
    cy.get('#country').type(customerDetails.country);
    cy.get('#city').type(customerDetails.city);
    cy.get('#card').type(customerDetails.creditCard);
    cy.get('#month').type(customerDetails.month);
    cy.get('#year').type(customerDetails.year);
  
    // Click on 'Purchase'
    cy.contains('Purchase').click();
  
    // Verify the success message
    cy.get('.sweet-alert').should('be.visible').and('contain', 'Thank you for your purchase!');
  });
  Cypress.Commands.add('visitCategoryAndVerify', (category) => {
    // Click on the category name
    cy.contains(category.name).click();
  
    // Verify the category's products are visible
    category.products.forEach((product) => {
      cy.contains(product).should('be.visible');
    });
  });
      