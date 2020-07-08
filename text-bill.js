function textBill (){

    var callsTotal = 0;
    var smsTotal = 0;
    var total = 0; 
   
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

      return callsTotal
    
    
    }

    function getSmsCost (){

        return smsCost
 
    }
   
    function myOverallTotal (){

        return total = callsTotal + smsTotal;

    }

    function criticalLevel (){

        return 15 
    }

    function warningLevel (){

        return 10

    };


    function className(){
        if (myOverallTotal() >= criticalLevel()){

            return "critical"
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
        className
    }



};