$(document).ready(function() {
  $("#language-picker").submit(function(event) {
    const ageInput = $("#age").val();
    const sportInput = $("#sport").val();
    const mathInput = $("#math").val();
    const codeInput = $("#code").val();
    const laptopInput = $("#laptop").val();

    let result;
    if (ageInput == "Yes" && laptopInput == "Yes") {
      result = "Javascript"
    } else if (ageInput == "Yes" && sportInput == "Yes") {
      result = "Python"
    } else if (laptopInput == "Yes" && codeInput == "Yes") {
      result = "C#" 
    } else if (mathInput == "No" && ageInput == "Yes") {
      result = "Ruby"
    } else if (sportInput == "No" && laptopInput == "Yes") {
      result = "Go"
    } else {
      result = "YOU'RE TOO SMART FIGURE IT OUT!"
    }
    
    $("#answer").text(result);
    $("#suggestion").show();

    event.preventDefault();
  });
});