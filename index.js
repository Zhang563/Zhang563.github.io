function getRandomFact(){
  const number = document.querySelector("#numberfact").value;
  fetch(`http://numbersapi.com/${numberfact}`)
  .then(res => res.json())
  .then(function(data){
    console.log(data.message);
    document.querySelector("#numberfact").
  });
}
