let gold= 0;
let multiplier=0;
let beholderHealth = 1000;





let clickUpgrades = {
  dagger: {
    price: 75,
    quantity: 0,
    multiplier: 2
  },
  snakeHeadedWhip: {
    price: 100,
    quantity: 0,
    multiplier: 4
  }
};

let automaticUpgrades= {
  smallSpiders: {
    price: 150,
    quantity: 0,
    multiplier: 20
  },
  mediumSpiders: {
    price: 200,
    quantity: 0,
    multiplier: 40
  }
  
};

function draw(){
document.getElementById('beholder').innerText = gold
document.getElementById('dagger').innerText= 'Price:' + ' ' + clickUpgrades.dagger.price + ' ' + 'Quantity:' + ' ' + clickUpgrades.dagger.quantity
document.getElementById('snakeHeadedWhip').innerText= 'Price:' + ' ' + clickUpgrades.snakeHeadedWhip.price + ' ' + 'Quantity:' + ' ' + clickUpgrades.snakeHeadedWhip.quantity
document.getElementById('smallspiders').innerText= 'Price:' + ' ' + automaticUpgrades.smallSpiders.price + ' ' + 'Quantity:' + ' ' + automaticUpgrades.smallSpiders.quantity
document.getElementById('mediumspiders').innerText= 'Price:' + ' ' + automaticUpgrades.mediumSpiders.price + ' ' + 'Quantity:' + ' ' + automaticUpgrades.mediumSpiders.quantity
}


function attack(){
  document.getElementById("beholder").innerText=gold
  document.getElementById("health").innerText=beholderHealth
  gold++;
  beholderHealth--;
  gold += multiplier;
  beholderHealth -= multiplier
  if(beholderHealth <= 0){
    alert("The Beholder is hurting and retreats!");
  }
  console.log("gold:",gold,"health:",beholderHealth)
  draw()
}

function purchaseDagger(){
 
  if(gold >= clickUpgrades.dagger.price){
    clickUpgrades.dagger.quantity++
    gold -= clickUpgrades.dagger.price;
    clickUpgrades.dagger.price=Math.floor(2 * clickUpgrades.dagger.price);
    multiplier += clickUpgrades.dagger.multiplier;

    draw()
  }
}

function purchaseSnakeHeadedWhip(){
  
  if(gold >= clickUpgrades.snakeHeadedWhip.price){
    clickUpgrades.snakeHeadedWhip.quantity+= 1
    gold -= clickUpgrades.snakeHeadedWhip.price;
    clickUpgrades.snakeHeadedWhip.price=Math.floor(2 * clickUpgrades.snakeHeadedWhip.price);
    multiplier += clickUpgrades.snakeHeadedWhip.multiplier;
    
    draw()
  }
}

function purchaseSmallSpiders(){
  
  if(gold >= automaticUpgrades.smallSpiders.price){
    automaticUpgrades.smallSpiders.quantity+= 1
    gold -= automaticUpgrades.smallSpiders.price;
    automaticUpgrades.smallSpiders.price=Math.floor(2 * automaticUpgrades.smallSpiders.price);
    multiplier += automaticUpgrades.smallSpiders.multiplier;
  
    draw()
  }
  startInterval()
}

function purchaseMediumSpiders(){
 
  if(gold >= automaticUpgrades.mediumSpiders.price){
    automaticUpgrades.mediumSpiders.quantity+= 1
    gold -= automaticUpgrades.mediumSpiders.price;
    automaticUpgrades.mediumSpiders.price=Math.floor(2 * automaticUpgrades.mediumSpiders.price);
    multiplier += automaticUpgrades.mediumSpiders.multiplier;
   draw()
  }
  startInterval()
  }



function collectAutomaticUpgrades(){
  
  gold += automaticUpgrades.smallSpiders.multiplier;
  gold += automaticUpgrades.mediumSpiders.multiplier;
  
  draw()

}

function startInterval() {
  collectionInterval = setInterval(collectAutomaticUpgrades, 3000);
}

  


var myMusic= document.getElementById("music");
function play() {
myMusic.play();
}

function pause() {
myMusic.pause();
}

draw()