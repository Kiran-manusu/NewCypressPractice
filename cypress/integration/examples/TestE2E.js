
describe('E2E greenkart test suite' , ()=>{
    it('First test case' , ()=>{

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.product>.product-name').should('have.length' , '30')

        cy.get("input.search-keyword").type("ca").should('have.value' , 'ca')

        cy.get("input.search-keyword").type('{enter}')

        cy.wait(3000)

        cy.get('.product:visible').should('have.length' , '4')

        cy.get('.products').find('.product').should('have.length' , '4')

        cy.get('.products').find('.product').each(($element , index , $listofvegs) => {

            const vegname = $element.find("h4.product-name").text()

            cy.log(vegname)
            
            if(vegname.includes('Cashews') || vegname.includes('Carrot')){

                cy.log("Product "+vegname+" is found now adding it to the cart")

                cy.wrap($element).find('button[type = button]').then($button => {
                    $button.css('border', '2px solid red')
                    cy.wrap($button).click()
                    cy.wait(1000)
                  })
            }

            else{

                cy.log(" No product available!!")
            }

        })

    cy.get("div.greenLogo").then((logoelement)=>{

        cy.log(logoelement.text())

    })

    cy.get('a.cart-icon').then($button => {
        $button.css('border', '1px solid red')
        cy.wrap($button).click()
      })   

    cy.get('ul.cart-items:visible').find('li.cart-item').each(($cartitem , index , $listofvegetablesincart) =>{

        var text = $cartitem.find('p.product-name').text()

        cy.log(text)

        if(text.includes('Carrot')|| text.includes('Cashews')){

            $cartitem.css('border' , '1px solid green')

            cy.log("Product added successfully to basket!!")
        }

        else{

            cy.log("Product not added to the basket...")
        }


    })

    cy.get('div.action-block button:visible').click()

    cy.get('#productCartTables:visible').find('p.product-name').each(($prod , index , $list)=>{
        var prodname = $prod.text()
        if(prodname.includes('Cashews') | prodname.includes('Carrot')){
            $prod.css('border' , '1px solid green')
            cy.log("Product is properly present in the checkout page also.")


        }



    })


    cy.get('button').contains('Place Order').then($button =>{

        $button.css('border' , '1px solid red')
        cy.wait(1000)
        cy.wrap($button).click()
        
    })

    cy.get('select').select('India')

    cy.get('.chkAgree').check().should('be.checked')

    cy.get('button').contains('Proceed').then($proceedbtn=>{
        $proceedbtn.css('border' , '1px solid red')
        cy.wrap($proceedbtn).click()
    })

})


})