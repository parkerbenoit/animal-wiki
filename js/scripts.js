$(document).ready(function() {
  const species = $("input:radio[name=species]:checked").val();
  $("input[value$='koala']").click(function()
  //if ( value = 'Koala') {
    $('#koalaInfo').show();
  }
});

//const species = $("input:radio[name=species]:checked").val();

