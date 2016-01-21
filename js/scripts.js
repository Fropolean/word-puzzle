var vowelSwap = function(word) {
    var output = word.replace(/[aeiou]/ig, "-");
    return output;
}

$(document).ready(function() {
  $("form#inquiry").submit(function(event) {
    var word = $("input#userInput").val();
    var result = vowelSwap(word);

  // $("span#result").show();
  document.write(result);
  $("span#puzzle").text(result);

  event.preventDefault();
  });
});
