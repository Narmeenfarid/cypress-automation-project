// cypress/e2e/Functional-tests/product-add-to-cart.spec.js

describe('Add product to cart', () => {
    it('should add a product to the cart successfully', () => {
      // Fetch base URL and product data from config and fixture files
      cy.fixture('productData.json').then((productData) => {
        const productId = productData.productId;
        const productName = productData.productName;
  
          // Visit the homepage
      cy.visit('/');
  
        // Step 2: Find the product on the homepage and click on it
        cy.contains(productName).click();
  
        // Step 3: Use custom command to add the product to the cart
        cy.clickAndAddToCart(productId);
  
        // Step 4: Verify that the product is successfully added to the cart
        cy.get('#cartur').click();
        cy.get('.success').should('be.visible');  
      });
    });
  });
  