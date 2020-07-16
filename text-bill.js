function textBill (){

    var callsTotal = 0;
    var smsTotal = 0;
    var totalCost = 0; 
   
     //var totalCost = 0
   
     
   function textBillTotal(billTypeEntered){
   
      // var billTypeEntered = billTypeText.value;
   
       if (billTypeEntered === "call"){
   
           callsTotal += 2.75;
    }
   
   
      else if (billTypeEntered === "sms"){
           smsTotal += 0.75;
    }
 

};


    function getCallCost (){

      return callsTotal.toFixed(2)
    
    
    }

    function getSmsCost (){

        return smsTotal.toFixed(2);
 
    }
   
    function myOverallTotal (){

        totalCost = callsTotal + smsTotal
        return totalCost.toFixed(2);
    }

    function criticalLevel (){

        return 50
    }

    function warningLevel (){

        return 30

    };


    function totalClassName (){
        if (myOverallTotal() >= criticalLevel()){

            return "danger"
        }
        if (myOverallTotal() >= warningLevel()){

            return "warning"
        }
    }

    



    return {
        textBillTotal,
        getCallCost,
        getSmsCost,
        myOverallTotal,
        totalClassName
    }



};