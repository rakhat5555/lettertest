$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var nameInput1 = $("input#name").val();
    var nameInput = nameInput1.toUpperCase();

    var lastNameInput1 = $("input#lastName").val();
    var lastNameInput = lastNameInput1.toUpperCase();

  $(".name").text(nameInput);
  $(".lastName").text(lastNameInput);
  $("#letter").show();


  });
});
