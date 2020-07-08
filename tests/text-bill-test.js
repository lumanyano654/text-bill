describe ('the text bill factory function', function () {
    it ('it should be able to return total call cost if call is entered', function() {

        let textBillEntered = textBill ();

        textBillEntered.textBillTotal("call");


        assert.equal(2.75, textBillEntered.myOverallTotal())

    })
})