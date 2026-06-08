function trackPackage(){

  const trackingNumber =
  document.getElementById("trackingInput").value;

  const result =
  document.getElementById("trackingResult");

  if(trackingNumber === ""){
    result.innerHTML =
    "Please enter a tracking number.";
    result.style.color = "yellow";
  }
  else{

    result.innerHTML =
    "Tracking Number " +
    trackingNumber +
    " is currently in transit.";

    result.style.color = "#00ff99";
  }
}