var pista, imagem_pista, pl, imagem_pl;
var barreira1, barreira2;
var bomba_img;
var moeda_img;
var energy_img;

function preload(){

imagem_pl = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png")
imagem_pista = loadImage("path.png")
bomba_img = loadImage("bomb.png")
moeda_img = loadImage("coin.png")  
energy_img = loadImage("energyDrink.png")
  
  //imagens pré-carregadas
}

function setup(){
  createCanvas(400,400);
  //crie os sprites aqui
  

  
  //pista
  pista = createSprite(200,200,30,30)
  pista.addImage(imagem_pista)
  pista.scale = 1.2
  pista.velocityY = 7
  
    //Personagem do jogador
pl = createSprite(200,320,15,15) 
pl.addAnimation("player", imagem_pl)

  
  //Barreira
barreira1 = createSprite(0,200,100,400)
 barreira2 = createSprite(400,200,100,400)
  barreira1.visible = false
    barreira2.visible = false

}

   

function draw() {
  background(0);
  drawSprites();

  if(pista.y > 400){
  pista.y = height / 2
  }
  
pl.x = mouseX
  
pl.collide(barreira1)
pl.collide(barreira2)

var aleatório = Math.round(random(1,3)) 
  
  
  
if(frameCount % 60 === 0){
  
if(aleatório === 1){
bomb();  
  
  
  } else if(aleatório === 2){
    coins();
  } else if(aleatório === 3){
    drink();
  }

}


}

function bomb(){
var bomb;
bomb = createSprite(random(50,350),-20,15,15)
bomb.addImage(bomba_img)
bomb.velocityY = 5
bomb.scale = 0.1
bomb.lifetime = 100  

}

function coins(){
var coins;
coins = createSprite(random(50,350),-20,15,15)
coins.addImage(moeda_img)
coins.velocityY = 5
coins.scale = 0.5
coins.lifetime = 100  

}

function drink(){
var drink;
drink = createSprite(random(50,350),-20,15,15)
drink.addImage(energy_img)
drink.velocityY = 5
drink.scale = 0.1
drink.lifetime = 100  

}
