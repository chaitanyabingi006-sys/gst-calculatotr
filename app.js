function calculateGST(){

  let amount = parseFloat(document.getElementById("amount").value);
  let gst = parseFloat(document.getElementById("gst").value);

  if(isNaN(amount)){
    document.getElementById("result").innerHTML =
      "Please enter an amount";
    return;
  }

  let gstAmount = amount * gst / 100;
  let total = amount + gstAmount;

  document.getElementById("result").innerHTML =
    "GST Amount: ₹" + gstAmount.toFixed(2) +
    "<br>Total Amount: ₹" + total.toFixed(2);
}
