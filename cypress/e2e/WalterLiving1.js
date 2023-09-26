

describe('Walter Living Testsuite', () => {
    // Onno hier, hallo
    it('should navigate to the loging page', () => {
        //visit the loginpage
        cy.visit('https://app.walterliving.com/login')
   
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
        cy.get('div.hidden.lg\\:flex.lg\\:flex-col.lg\\:block.lg\\:flex-shrink-0.lg\\:bg-white.lg\\:border-r.lg\\:border-gray-200.w-64')
            .find('ul.-mx-2.space-y-1')  //Find the div with 
            .contains('Home') //
            .should('exist') //

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

        // Click on the next button
        cy.get('a[href="/dossier/create/0479010000000648/submit"]').click()

        // Find the "Good condition" radio button by its ID and asserts it exists
        cy.get('#home_condition_home_condition_good').should('exist')

        // Check if then "Good condition" radio button is selected
        cy.get('#home_condition_home_condition').should('be.visible')




    })



})