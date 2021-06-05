$(document).ready(function() {
  $("#language-picker").submit(function(event) {
    const ageInput = $("input#age").val();
    const sportInput = $("input#sport").val();
    const mathInput = $("input#math").val();
    const codeInput = $("input#code").val();
    const laptopInput = $("input#laptop").val();

    let result;
    if (ageInput === "Yes", "yes", "Y", "y" && laptopInput === "Yes", "yes", "Y", "y" ) {
      result = "Javascript"
    } else if (ageInput === "No", "no", "Y", "n" && sportInput === "Yes", "yes", "Y", "y" ) {
      result = "Python"  
    } else if (laptopInput === "Yes", "yes", "Y", "y"  && codeInput === "Yes", "yes", "Y", "y" ) {
      result = "C#" 
    } else if (mathInput === "No", "no", "Y", "n" && ageInput === "Yes", "yes", "Y", "y" ) {
      result = "Ruby"
    } else if (sportInput === "No", "no", "Y", "n" && laptopInput === "No", "no", "Y", "n") {
      result = "Go"
    } else {
      result = "YOU'RE TOO SMART FIGURE IT OUT!"
    }
    
    $("#answer").text(result);
    $("#suggestion").show();

    event.preventDefault();
  });
});