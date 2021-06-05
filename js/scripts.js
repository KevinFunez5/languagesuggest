$(document).ready(function() {
  $("#language-picker").submit(function(event) {
    const ageInput = $("input#age").val();
    const sportInput = $("input#sport").val();
    const mathInput = $("input#math").val();
    const codeInput = $("input#code").val();
    const laptopInput = $("input#laptop").val();

    let result;
    if (ageInput === "Y" && laptopInput === "Y") {
      result = "Javascript"
    } else if (ageInput === "N" && sportInput === "Y") {
      result = "Python"  
    } else if (laptopInput === "Y" && codeInput === "Y") {
      result = "C#" 
    } else if (mathInput === "N" && ageInput === "Y") {
      result = "Ruby"
    } else if (sportInput === "N" && laptopInput === "N") {
      result = "Go"
    } else {
      result = "YOU'RE TOO SMART FIGURE IT OUT!"
    }
    
    $("#answer").text(result);
    $("#suggestion").show();

    event.preventDefault();
  });
});