

describe("command example", () => {

    it("test1", () => {

         cy.RandomStringGen().then(valueoftext=>{
            cy.log(valueoftext)
         })


         cy.ChooseGender().then(randgender =>{

            cy.log(randgender)
         })




         
       

        
       




    })
})