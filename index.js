function getRandomFact(){
const n = document.querySelector("#innumber").value;
  $.get(`http://numbersapi.com/${n}`, function(data) {
    $('#number').text(data);
    console.log($('#number').text(data));
  });
}

//function
