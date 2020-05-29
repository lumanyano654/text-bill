const billTypeText = document.querySelector(".billTypeText");
const textTotalAddBtn = document.querySelector(".addToBillBtn");
const callsTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem = document.querySelector(".smsTotalOne");
const totalCostElem = document.querySelector(".totalOne");


 var callsTotal = 0;
 var smsTotal = 0;

function textBillTotal(){

    var billTypeEntered = billTypeText.value;

    if (billTypeEntered === "call"){

        callsTotal += 2.75;
}


   else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
}



   callsTotalElem.innerHTML = callsTotal.toFixed(2);
   smsTotalElem.innerHTML = smsTotal.toFixed(2);
   
    var totalCost = callsTotal + smsTotal;
   totalCostElem.innerHTML = totalCost.toFixed(2);
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
       