describe("Fixture test suite", () => {

    let userdata;

    let name;

    before(() => {

        cy.fixture('userdata').its("data").then((data) => {

            userdata = data

            return userdata
        })

        cy.visit("https://rahulshettyacademy.com/angularpractice/")


    })


    it("Form filling using the fixture", () => {

        // cy.get("div.form-group input[name ='name']").invoke('attr' , 'minlength').then(lenattr=>{
        //     expect(lenattr).equal('2')
        // })

        cy.get("div.form-group input[name ='name']").should('have.attr', 'minlength', '2')

        cy.get('#inlineRadio3').should('be.disabled')

        userdata.forEach(data1 => {

            // var textname = cy.RandomString()

            // cy.log(textname)

            // cy.get("div.form-group input[name ='name']").then($ele =>{

            //     cy.wrap($ele).type(cy.RandomStringGen())
            // })

            cy.RandomStringGen().then(valueoftext => {

                cy.get("div.form-group input[name ='name']").type(valueoftext)

                cy.get("div.form-group input[name ='name']").type('{enter}')

                cy.get('h4 input').should('contain.value', valueoftext)

            })



            cy.get("div.form-group input[name ='email']").type(data1.email)

            cy.get("#exampleInputPassword1").type(data1.pass)

            cy.ChooseGender().then(gendervalue=>{

                cy.get("#exampleFormControlSelect1").select(gendervalue)


            })

            cy.get("input[name = 'bday']").type(data1.dob)

            

            cy.get(".btn.btn-success").click()

            cy.wait(2000)

            cy.reload()

        });







    })


})
