require('cypress-xpath');

describe('My first test suite' , ()=>{
    it('First test case' , ()=>{

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.product>.product-name').should('have.length' , '30')

        console.log("Hello")

        cy.get("input.search-keyword").type("ca").should('have.value' , 'ca')

        cy.get("input.search-keyword").type('{enter}')

        cy.wait(3000)

        cy.get('.product:visible').should('have.length' , '4')

        cy.get('.products').find('.product').should('have.length' , '4')

       // cy.get('.products').find('.product').eq(1).contains("ADD TO CART").click()

        cy.get('.products').find('.product').each(($element , index , $listofvegs) => {

            const vegname = $element.find("h4.product-name").text()

            cy.log(vegname)
            
            if(vegname.includes('Cashews') || vegname.includes('Carrot') || vegname.includes('Capsicum')){

                cy.log("Product "+vegname+" is found now adding it to the cart")

                cy.wrap($element).find('button[type = button]').click()
            }

            else{

                cy.log(" No product available!!")
            }

        })


    //    const logo = cy.get("div.greenLogo")

    //    cy.log(logo.text())

    // we have to handle our own promises

    cy.get("div.greenLogo").then((logoelement)=>{

        cy.log(logoelement.text())

    })






})


})