// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />
import Homepage from "../integration/Pageobjetcs/Homepage"
export{}


Cypress.Commands.add("RandomStringGen", () => {

    var text = Math.random().toString(36).substring(2 ,15)

    return text

})





Cypress.Commands.add("getassertTitle", (title) => {


    cy.title().should('include', title);

})







Cypress.Commands.add("AssertTextValue", (TextvalueActual, TextvalueExpected) => {

    try {
        expect(TextvalueActual).be.equal(TextvalueExpected)
        cy.log("Values matched , test case is passed!!!")
        
    } catch (error) {

        cy.log("The values are not matched , test case is fail!!!")
        
    }
    

    



})




Cypress.Commands.add("ChooseGender" , ()=>{

    let gender = ['Male' , 'Female']
    
    let randomegender = gender[Math.floor(Math.random() * gender.length)];

    return randomegender
})  


Cypress.Commands.add("AddProduct" , (prdname)=>{

    const name = new Homepage()

    name.getprdnamelist().each(($ele , index , $list)=>{

        var prdtext = $ele.text()
        cy.log(prdtext)
        if(prdtext.includes(prdname)){
            

            name.getaddbuttonlist().eq(index).scrollIntoView().then($buttonadd=>{
                
                $buttonadd.css('border' , '2px solid red')
            
                cy.wrap($buttonadd).click().then(()=>{
                  
                    $buttonadd.css('border' , '2px solid Green')
                })
               
              

            })
        }

    })
}) 



Cypress.Commands.add("Validatetext" , (actualtext ,expectedtext)=>{

    try {

        expect(actualtext).equal(expectedtext)
        
    } catch (error) {

        cy.log("Expected text is not equal expected!!!")
        
    }
})  


Cypress.Commands.add("GetTextFromElement" , ($element)=>{
   return  $element.text()

    
})  








