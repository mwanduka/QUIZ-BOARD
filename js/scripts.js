$(document).ready(function(){
  $("form#Quiz").submit(function(event){
    var question1= $("input:radio[name=question1]:checked").val();
    var question2= $("input:radio[name=question2]:checked").val();
    var question3= $("input:radio[name=question3]:checked").val();

    var result=parseInt(question1)+parseInt(question2)+parseInt(question3);
    $("#result").text("Your scored: " +result + " %");

    $("button").click(function() {
      $("#result-showing").toggle();
      $("#Quiz-hidden").toggle();
    });
      $("form#Quiz").hide();
      $("#result").show();

      event.preventDefault();
    });
});
