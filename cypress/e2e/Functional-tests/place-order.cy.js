

describe('Place Order Functionality', () => {
    it('should add a product to the cart and place an order successfully', () => {
      // Fetch product and customer details from fixture
      cy.fixture('orderDetails.json').then((orderDetails) => {
        const { productId, customer } = orderDetails;
  
        // Step 1: Visit the homepage
        cy.visit(Cypress.config().baseUrl);
  
        // Step 2: Add product to the cart
        cy.clickAndAddToCart(productId);
  
        // Step 3: Place the order
        cy.placeOrder(customer);
      });
    });
  });
  