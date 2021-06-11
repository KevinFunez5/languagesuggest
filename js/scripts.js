$(document).ready(function() {
  $("#language-picker").submit(function(event) {
    const ageInput = $("input#age").val();
    const sportInput = $("input#sport").val();
    const mathInput = $("input#math").val();
    const codeInput = $("input#code").val();
    const laptopInput = $("input#laptop").val();

    let result;
    if (ageInput === "Yes" || ageInput === "yes" || ageInput === "Y" || ageInput === "y" && laptopInput === "Yes" && laptopInput === "yes" || laptopInput === "Y" || laptopInput === "y" ) {
      result = "Javascript"
    } else if (ageInput === "Yes" || ageInput === "yes" || ageInput === "Y" || ageInput === "y" && sportInput === "Yes", "yes", "Y", "y" ) {
      result = "Python"  
    } else if (laptopInput === "Yes" && laptopInput === "yes" || laptopInput === "Y" || laptopInput === "y"  &&  codeInput === "Yes" || codeInput === "yes" || codeInput === "Y" || codeInput === "y" ) {
      result = "C#" 
    } else if (mathInput === "No" || mathInput === "no" || mathInput === "N"  || mathInput === "n" && ageInput === "Yes" || ageInput === "yes" || ageInput === "Y" || ageInput === "y" ) {
      result = "Ruby"
    } else if (sportInput === "No" || sportInput === "no" || sportInput === "N" || sportInput === "n" && laptopInput === "Yes" && laptopInput === "yes" || laptopInput === "Y" || laptopInput === "y") {
      result = "Go"
    } else {
      result = "YOU'RE TOO SMART FIGURE IT OUT!"
    }
    
    $("#answer").text(result);
    $("#suggestion").show();

    event.preventDefault();
  });
});