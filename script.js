var ImgAtual = "dd.png";
var ImgAnterior = "ss.png";


function trocar(){
document.getElementById("figura").src = ImgAtual;
let aux = ImgAtual;
ImgAtual = ImgAnterior;
ImgAnterior = aux;

}

var img2 = "vv.png"
var img1 = "ll.png"

function trocarr(){
document.getElementById("figura2").src = img2
let aux = img2
img2 = img1
img1 = aux
}