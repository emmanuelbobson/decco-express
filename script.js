function goToTrackingPage(){

  const trackingNumber =
  document.getElementById("trackingInput").value;

  if(trackingNumber === ""){

    alert("Please enter tracking number");

    return;
  }

  window.location.href =
  "tracking.html?tracking=" +
  trackingNumber;

}
