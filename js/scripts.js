var vowelSwap = function(word) {
  var vowels = "aeiou";

  for (var i = 0; i < word.length; i++) {
    var output = word.replace(/[aeiou]/ig, "-");
    return output;
  }
}

$(document).ready(function() {
  $("form#inquiry").submit(function(event) {
    var word = $("input#userInput").val();
    var result = vowelSwap(word);

  $("#result").show();
  $("#puzzle").text(result);
  event.preventDefault();
  });
});
