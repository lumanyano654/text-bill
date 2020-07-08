describe ('the text bill factory function', function () {
    it ('it should be able to return total call cost if call is entered', function() {

        let textBillEntered = textBill ();

        textBillEntered.textBillTotal("call");


        assert.equal(2.75, textBillEntered.myOverallTotal())

    });
    
    it ('it should be able to return total call cost if call is entered four times', function() {

        let textBillEntered = textBill ();

        textBillEntered.textBillTotal("call");
        textBillEntered.textBillTotal("call");
        textBillEntered.textBillTotal("call");
        textBillEntered.textBillTotal("call");



        assert.equal(11.00, textBillEntered.myOverallTotal())

    });
    
    it ('it should be able to return total sms cost if sms is entered', function() {

        let textBillEntered = textBill ();

        textBillEntered.textBillTotal("sms");


        assert.equal(0.75, textBillEntered.myOverallTotal())

    });

    it ('it should be able to return total sms cost if sms is entered four times', function() {

        let textBillEntered = textBill ();

        textBillEntered.textBillTotal("sms");
        textBillEntered.textBillTotal("sms");
        textBillEntered.textBillTotal("sms");
        textBillEntered.textBillTotal("sms");


        assert.equal(3.00, textBillEntered.myOverallTotal())

    });

    describe('the warning level and critical', function (){

        it("should be able to return warning when the total cost reaches 10", function (){
            let textBillEntered = textBill ()

            textBillEntered.textBillTotal("call");
            textBillEntered.textBillTotal("call");
            textBillEntered.textBillTotal("sms");
            textBillEntered.textBillTotal("sms");
            textBillEntered.textBillTotal("sms");
            textBillEntered.textBillTotal("sms");
            textBillEntered.textBillTotal("sms");
            textBillEntered.textBillTotal("sms");
            textBillEntered.textBillTotal("sms");

            assert.equal(10.75, textBillEntered.myOverallTotal())
            assert.equal('warning', textBillEntered.className());
        })
        

        it("should be able to return critical when the total cost reaches 15", function (){
            let textBillEntered = textBill ()


            textBillEntered.textBillTotal("call");
            textBillEntered.textBillTotal("call");
            textBillEntered.textBillTotal("call");
            textBillEntered.textBillTotal("call");
            textBillEntered.textBillTotal("sms");
            textBillEntered.textBillTotal("sms");
            textBillEntered.textBillTotal("sms");
            textBillEntered.textBillTotal("sms");
            textBillEntered.textBillTotal("sms");
            textBillEntered.textBillTotal("sms");
            textBillEntered.textBillTotal("sms");

            assert.equal(16.25, textBillEntered.myOverallTotal())
            assert.equal('critical', textBillEntered.className());
        })
    })


})