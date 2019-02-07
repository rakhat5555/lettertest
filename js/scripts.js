$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var nameInput = $("input#name").val();
    var lastNameInput = $("input#lastName").val();

  $(".name").text(nameInput);
  $(".lastName").text(lastNameInput);
  $("#letter").show();

  });
});
