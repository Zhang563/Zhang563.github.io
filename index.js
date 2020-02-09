function getRandomFact(){
const n = document.querySelector("#innumber").value;
  $.get( `http://numbersapi.com/${n}`, function(data) {
    $('#number').text(data);
    // if (data === error){
    //   alert("Pick a number");
    // }else {
    console.log($('#number').text(data));
    // }

  });

}
