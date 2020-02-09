function getRandomFact(){
  fetch("")
  .then(res => res.json())
  .then(function(data){
    console.log(data.message);
    document.querySelector("#fun-fact").
  });
}
