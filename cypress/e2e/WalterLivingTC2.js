

describe('Walter Living TC2', () => {
    
    it('should navigate to the loging page', () => {
        //visit the loginpage
        cy.visit('/')

        // Find the email input field within the specified structure
        cy.get('form') // Select the form element
            .find('.mt-8') // Find the div with class "mt-8" inside the form
            .find('#user_registration_email_container') // Find the div with id "user_registration_email_container"
            .find('input[type="text"]') // Find the email input field within this div
            .type('laraguis@testspecialist.nl') // Type your email address

        // Find the password input field within the specified structure
        cy.get('form') // Select the form element
            .find('.mt-8') // Find the div with class "mt-8" inside the form
            .find('#user_registration_password_container') // Find the div with id "user_registration_password_container"
            .find('input[type="password"]') // Find the password input field within this div
            .type('1234Test4321!') // Type your password

        // Find the login button within the specified structure
        cy.get('form') // Select the form element
            .find('.mt-8') // Find the div with class "mt-8" inside the form
            .find('button').click () // Find the div with button and click

        // Check if the Home button is present on the dashboard 
        cy.get('div.hidden.lg\\:fixed.lg\\:inset-y-0.lg\\:z-20.lg\\:flex.lg\\:w-72.lg\\:flex-col[role="navigation"]')  //select the hidden element navigation
            .find('ul.-mx-2.space-y-1')  //Find the div with "ul.-mx-2.space-y-1" inside the hidden element
            .contains('Home') // Find the div with class "Home" 
            .should('exist') // Assert if "exist" is present

        // Check if the search for address field is present at the top of the page
        cy.get('#report_search input[placeholder="Search for address"]').should('exist')

        // Click on the search for adress field at the top of the page
        cy.get('#report_search input[placeholder="Search for address"]').click()

        // Type the following address in the search for address field at the top of the page: Bloemgracht 87 Zaandam (every test use a different adress for  now)
        cy.get('#report_search_query').type('Bloemgracht 87 Zaandam')

        // Click on the first address suggestion (Bloemgracht 87 Zaandam)
        cy.get('#options li:first').click()

        // Check if the adress is being shown
        cy.get('.property-card__address__street').should('be.visible')

    })

})