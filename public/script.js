const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) =>
        `<span style="transition-delay: ${idx * 30}ms">${letter}</span>`,
    )
    .join('');
});



  $("#open").click(function(){
    $("#up").hide();
    $("#end").hide();
    $("#op").show();
    $("#open").css("background-color","#33425B");
    $("#upcoming").css("background-color","#F33535");
    $("#ended").css("background-color","#F33535");
})

$("#upcoming").click(function(){
  $("#op").hide();
  $("#end").hide();
  $("#up").show();
  $("#upcoming").css("background-color","#33425B");
  $("#ended").css("background-color","#F33535");
  $("#open").css("background-color","#F33535");
})

$("#ended").click(function(){
  $("#up").hide();
  $("#op").hide();
  $("#end").show();
  $("#ended").css("background-color","#33425B");
  $("#open").css("background-color","#F33535");
  $("#upcoming").css("background-color","#F33535");
})


$("#exam").click(function(){
  $("#exam").fadeOut();
  $("#exam").hide();
  $("#examflip").show();
})

$("#examflip").click(function(){
  $("#examflip").hide();
  $("#exam").show();
})


$("#results").click(function(){
  $("#results").hide();
  $("#resultflip").show();
})

$("#resultflip").click(function(){
  $("#resultflip").hide();
  $("#results").show();
})


$("#extras").click(function(){
  $("#extras").hide();
  $("#extrasflip").show();
})

$("#extrasflip").click(function(){
  $("#extrasflip").hide();
  $("#extras").show();
})