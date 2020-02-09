function getRandomFact(){
  $.get('http://numbersapi.com/1', function(data) {
    $('#numberfact').text(data);
    console.log($('#numberfact').text(data));
  });
}
// function getRandomDog(){
//       fetch("https://dog.ceo/api/breeds/image/random")
//           .then(res => res.json())
//           .then(function(data) {
//               console.log(data.message);
//               document.querySelector("#dog-image").style.backgroundImage=`url(${data.message})`;
//           });
//
//   }
