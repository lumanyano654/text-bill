const billTypeText = document.querySelector(".billTypeText");
const textTotalAddBtn = document.querySelector(".addToBillBtn");
const callsTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem = document.querySelector(".smsTotalOne");
const totalCostElem = document.querySelector(".totalOne");


 var callsTotal = 0;
 var smsTotal = 0;
 var total = 0;

  var totalCost = 0

  
function textBillTotal(){

    var billTypeEntered = billTypeText.value;

    if (billTypeEntered === "call"){

        callsTotal += 2.75;
}


   else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
}

<<<<<<< HEAD


   callsTotalElem.innerHTML = callsTotal.toFixed(2);
   smsTotalElem.innerHTML = smsTotal.toFixed(2);
   
     totalCost = callsTotal + smsTotal;

   totalCostElem.innerHTML = totalCost.toFixed(2);

=======
var total = callsTotal + smsTotal;

   callsTotalElem.innerHTML = callsTotal.toFixed(2);
   smsTotalElem.innerHTML = smsTotal.toFixed(2);
   totalCostElem.innerHTML = total.toFixed(2);
     
>>>>>>> a236ce08032228cc6114c3561748c615d34e1cac
   
    textBillTotalColor(totalCost);
};

function textBillTotalColor(totalCost){


       totalCostElem.classList.remove("danger");
       totalCostElem.classList.remove("warning");


      if (totalCost >= 50){

        totalCostElem.classList.add("danger");
}

      else if (totalCost >= 30){
          totalCostElem.classList.add("warning");
}

};

textTotalAddBtn.addEventListener("click",textBillTotal);
       