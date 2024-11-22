it('Sign up and log in with the same user', () => {
  cy.fixture('credentials.json').then((credentials) => {
    // Step 1: Generate a unique username for signup
    const uniqueUsername = `${credentials.username}_${Date.now()}`;
    const password = credentials.password;

    // Store the generated username and password for later use
    Cypress.env('signupUsername', uniqueUsername);
    Cypress.env('signupPassword', password);

    // Step 2: Sign up the user
    cy.visit(credentials.url);
    cy.get('#signin2').click();
    cy.get('#signInModal').should('be.visible');

    // Fill out the signup form
    cy.get('#sign-username').clear().type(uniqueUsername, { delay: 100 });
    cy.get('#sign-password').clear().type(password, { delay: 100 });

    // Click the signup button
    cy.get('button[onclick="register()"]').click();

    // Verify that the signup was successful using alert 
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.eq('Sign up successful.');
    });

    // Step 3: Log in with the same username and password
    // Visit the application and open the login modal
    cy.get('#login2').click();
    cy.get('#logInModal').should('be.visible');

    // Fill out the login form
    cy.get('#loginusername').clear().type(uniqueUsername, { delay: 100 });
    cy.get('#loginpassword').clear().type(password, { delay: 100 });

    // Click the login button
    cy.get('button[onclick="logIn()"]').click();

    // Verify that login was successful (check for the visibility of the #nameofuser element)
    cy.get('#nameofuser', { timeout: 10000 }).should(($el) => {
      const display = $el.css('display');
      expect(display).not.to.equal('none'); // Ensure it's visible
    });

    // Confirm the welcome message
    cy.get('#nameofuser').should('contain.text', `Welcome ${uniqueUsername}`);
  });
});
