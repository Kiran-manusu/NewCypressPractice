/// <reference types = "Cypress"/>
/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe';

describe("Handling frame test suite" ,()=>{


    it("Handling iframe" , ()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')

        cy.frameLoaded("#courses-iframe")

        cy.iframe().find('li a').contains("Mentorship").click()

        cy.iframe().find('.page-title h1').then(($title)=>{
            var titletext = $title.text()
            expect(titletext).be.equal('Mentorship')
        })




    })
})