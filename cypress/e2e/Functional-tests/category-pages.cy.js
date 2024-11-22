describe('Category Pages Verification', () => {
    before(() => {
      // Visit the homepage
      cy.visit('/');
    });
  
    it('should verify Phones, Laptops, and Monitors pages load with correct data', () => {
      cy.fixture('categories.json').then((data) => {
        const { categories } = data;
  
        // Loop through each category and verify
        categories.forEach((category) => {
          cy.visitCategoryAndVerify(category);
  
          // Go back to the homepage for the next iteration
          cy.visit('/');
        });
      });
    });
  });
  