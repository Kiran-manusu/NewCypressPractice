/// <reference types="Cypress" />

import Homepage from "../Pageobjetcs/Homepage"

describe("Fixture and custom commands demo", () => {
    var datalist = []
    var alerttext;
    var totalprdprices =0;

    it("Test case 1", () => {

        const home = new Homepage()

        cy.visit('https://rahulshettyacademy.com/angularpractice/shop')

        cy.fixture('prdname').then(data => {
           
            datalist = data.Products

            cy.log(datalist.length)

            for (let index = 0; index < datalist.length; index++) {
                const productname = datalist[index];
                cy.AddProduct(productname)


            }

            home.getcartbutton().click()
            home.getTotalproductlist().each(($ele , index , $list)=>{

                let prdtext = $ele.text()
                // var price = prdtext.replace('. ', '')
                prdtext = prdtext.substring(3).trim();
                // cy.log(typeof(prdtext))
                let prdint = parseFloat(prdtext)
                totalprdprices += prdint;
                              
            }).then(()=>{
                cy.log("***** Total price is "+totalprdprices)
            })

            
            home.getchekoutbutton().click()
            home.getcountrytextfield().type('India')
            home.getsuggestions().click()
            home.getpurchasebutton().click()   
            home.getalert().then($alert=>{
                cy.GetTextFromElement($alert).then($alrtext =>{
                    cy.Validatetext($alrtext , "Success! Thank you! Your order will be delivered in next few weeks :-).")
                })

            })
            
       





        })





        // cy.get('h4.card-title a').each(($ele , index , $list)=>{

        //     var prdtext = $ele.text()
        //     cy.log(prdtext)
        //     if(prdtext.includes('iphone X')){

        //         cy.get('.btn.btn-info').eq(index).click()
        //     }

        // })

    })


})