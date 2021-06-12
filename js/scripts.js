$(document).ready(function() {
  $("#language-picker").submit(function(event) {
    const ageInput = $('input[name="age"]:checked').val();
    const sportInput = $('input[name="sport"]:checked').val();
    const mathInput = $('input[name="math"]:checked').val();
    const codeInput = $('input[name="code"]:checked').val();
    const laptopInput = $('input[name="laptop"]:checked').val();
    // $('input[name="name_of_your_radiobutton"]:checked').val();

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