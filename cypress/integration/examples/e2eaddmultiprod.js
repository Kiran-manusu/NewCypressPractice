// <reference types="Cypress" />

import Homepage from "../Pageobjetcs/Homepage"

describe("Adding Multiple Products demo", () => {
    var datalist = []
    var alerttext;
    var totalprdprices = 0;

    it("Test case 1", () => {

        const home = new Homepage()

        cy.visit('https://rahulshettyacademy.com/angularpractice/shop')

        cy.fixture('multipleproducts').then(data => {

            datalist = data.Products

            cy.log(datalist.length)


            for (let index = 0; index < datalist.length; index++) {
                const productname = datalist[index];
                cy.AddProduct(productname)


            }

            //Adding quantity equal time
            // for (let index = 0; index < datalist.length; index++) {
            //     const productname = datalist[index];
            //     cy.AddMultipleProduct(productname , 2)
            // }

            //Adding quantity different times
            // cy.AddMultipleProduct(datalist[0] , 1)
            // cy.AddMultipleProduct(datalist[1] , 3)

            home.getcartbutton().click()

            cy.get('.media-body h4 a').each(($prolist, index, $list) => {
                let itemvalue = $prolist.text()
                cy.log("Item Value in the List is " + itemvalue)
                cy.AssertTextValue(datalist[index], itemvalue)
            })


            home.getQuantity().each(($ele, index, $list) => {

                let quantity = $ele.text()
                // var price = prdtext.replace('. ', '')
                // prdtext = prdtext.substring(3).trim();
                cy.log(quantity)
                // cy.log(typeof(quantity))
                let prdint = parseFloat(quantity)
                // cy.log(typeof(prdint))
                // totalprdprices += prdint;

            })


            // .then(()=>{
            //     // cy.log("***** Total price is "+totalprdprices)

            //     cy.get('.table.table-hover tbody tr td.text-right strong').each(($price, index, $list)=>{
            //         let totalprice = $price.text()
            //         cy.log(totalprice)
            //         totalprice = totalprice.substring(3).trim();
            //         let totalpriceint = parseFloat(totalprice)
            //         cy.AssertTextValue(totalprdprices,totalpriceint)
            //     })
            // })


            // home.getchekoutbutton().click()
            // home.getcountrytextfield().type('India')
            // home.getsuggestions().click()
            // home.getpurchasebutton().click()   
            // home.getalert().then($alert=>{
            //     cy.GetTextFromElement($alert).then($alrtext =>{
            //         cy.Validatetext($alrtext , "Success! Thank you! Your order will be delivered in next few weeks :-).")
            //     })

            // })







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