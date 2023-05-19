//código X e Y dos carros, e velocidade

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [50, 105, 155, 218, 270, 325];
let velocidadeCarros = [2, 2.5, 3.0, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 25;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);  
  }
  }

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
  }

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  if (passouTodaATela(xCarros[i])){
  xCarros[i] = 600;
  }  
  }
  }

function passouTodaATela(xCarros){
  return xCarros < -50;
  }