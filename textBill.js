const billTypeText = document.querySelector(".billTypeText");
const textTotalAddBtn = document.querySelector(".addToBillBtn");
const callsTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem = document.querySelector(".smsTotalOne");
const totalCostElem = document.querySelector(".totalOne");


var callsTotal = 0;
var smsTotal = 0;
var total = 0;

var totalCost = 0

let textBillEntered = textBill();

function textBillTotal() {

      var billTypeEntered = billTypeText.value;
      textBillEntered.textBillTotal(billTypeEntered)
  //     if (billTypeEntered === "call"){

  //         callsTotal += 2.75;
  // }


  //    else if (billTypeEntered === "sms"){
  //         smsTotal += 0.75;
  // }





  callsTotalElem.innerHTML = textBillEntered.getCallCost();

  smsTotalElem.innerHTML = textBillEntered.getSmsCost();

   totalCost = textBillEntered.myOverallTotal()

  totalCostElem.innerHTML = totalCost;


 textBillTotalColor(totalCost);
};

function textBillTotalColor() {

  
  totalCostElem.classList.remove("danger");
  totalCostElem.classList.remove("warning");
  
  totalCostElem.classList.add(textBillEntered.totalClassName());

  //       if (totalCost >= 50){

  //         totalCostElem.classList.add("danger");
  // }

  //       else if (totalCost >= 30){
  //           totalCostElem.classList.add("warning");
  // }  


};

textTotalAddBtn.addEventListener("click", textBillTotal);
