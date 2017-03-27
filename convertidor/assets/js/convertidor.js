//alert("msj");
var gradosF= Number(document.getElementById("farenheit").value);
var convertidoCelcius=document.getElementById("gradosc");
var gradosC= Number(document.getElementById("celcius").value);
var convertidoFarenheit=document.getElementById("gradosf");

function convertirCelsius(){
  var C = (gradosF - 32) * 5 / 9;
  convertidoCelcius.innerHTML= C ;

}
function convertirFaren(){
  var F = (gradosC + 32) * (5 / 9);
    convertidoFarenheit.innerHTML= F ;
}
