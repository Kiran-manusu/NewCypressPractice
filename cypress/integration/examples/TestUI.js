/// <reference types="Cypress" />

/// <reference types="Cypress-iframe" />



describe("UI handling using cypress", () => {

    before(()=>{

        cy.log("This is under before block and runs only one time before executions")

    })

    beforeEach(()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")


    })



    it("Handling checkboxes", () => {

        
        cy.get("#checkBoxOption1").check().should('be.checked').should('have.value', 'option1')

        cy.get("input[type = 'checkbox']").check(['option2', 'option3'])

        //    cy.get("input[type = 'checkbox']").each(($element , index, $listofelement)=>{

        //     var text = $element.val()

        //     cy.log(text)

        //     if(text.includes('option2') | text.includes('option3')){

        //         cy.wrap($element).click()
        //     }

        //    })


        cy.get('select#dropdown-class-example').select('option1').should('have.value', 'option1')

        cy.get('.ui-autocomplete-input').type('ind')

        cy.wait(2000)

        cy.get('li.ui-menu-item').each(($ele, index, $list) => {

            var text = $ele.find('div').text()

            cy.log(text)

            if (text === 'India') {

                cy.wrap($ele.find('div')).click()


            }



        })

        cy.get('.ui-autocomplete-input').should('have.value', 'India')

        cy.get('#radio-btn-example').find('input').each(($ele, index, $list) => {
            var radiotext = $ele.val()
            cy.log(radiotext)
            if (radiotext.includes('radio1')) {
                cy.wrap($ele).click()
            }
        })


    })



    it("Handling alerts", () => {


        cy.get('#alertbtn').click()

        cy.on('window:alert', (str) => {

            expect(str).be.equal('Hello , share this practice page and share your knowledge')

        })


    })


    it("Handling window using cypress", () => {

        cy.get('#opentab:visible').invoke('removeAttr', 'target').click()

        cy.origin('https://www.qaclickacademy.com/', () => {

            cy.get('#navbarSupportedContent').find('a').contains('About us').click()

            cy.get('.col-lg-5 h2').should('contain', 'Welcome to QAClick Academy ')

        })
    })

    it("Handling web table", () => {
    
        cy.get('table[name = "courses"] tr td:nth-child(2)').each(($coursename, index, $listofcourses) => {

            var name = $coursename.text()

            cy.log(name)

            if(name.includes("Python Language")){

                cy.log(index)

                cy.get('table[name = "courses"] tr td:nth-child(2)').eq(index).next().then(($price)=>{

                    var prc = $price.text()

                    cy.log(prc)

                   // expect(prc).equal('25')

                   cy.AssertTextValue(prc , '25')
                })
             


            }






        })



    })

    it("Mouse hover" , ()=>{

        cy.get('#mousehover').invoke('show')

        cy.get('div.mouse-hover-content').find('a').contains('Top').click({force:true})

        cy.url().should('include' , 'top')

        



    })


    afterEach(()=>{

        cy.screenshot()
    })
    


    
})