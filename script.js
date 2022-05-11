// console.log('Works')

 let levels=6;
 let currentLevel=1;
// const selectedCharacter=document.querySelector()
const startbtn=document.querySelector('.start')
function mainFunc(){
  const goHome=document.getElementById('nextLevel').style.display='none'
    const tryAgain=document.getElementById('tryAgain').style.display='none'
    const nextLevel=document.getElementById('goHome').style.display='none'
    while(currentLevel<=levels){
if (winCondition!=true){
    tryAgain=document.getElementById('tryAgain').style.display='block'
     nextLevel=document.getElementById('goHome').style.display='block'
}else{
// nextLevel+=1
goHome=document.getElementById('nextLevel').style.display='block'
nextLevel=document.getElementById('goHome').style.display='block'
}}

}
mainFunc();
function getCharacter(){
    const selectedCharacter=document.createElement('div')
    const char1 =document.querySelector('#x1').addEventListener("click", function() {
      selectedCharacter.append()
      });
      const char2 =document.querySelector('#x1').addEventListener("click", function() {
        selectedCharacter.append()
    });

const char3 =document.querySelector('#x1').addEventListener("click", function() {
    selectedCharacter.append()
});

const char4 =document.querySelector('#x1').addEventListener("click", function() {
    selectedCharacter.append() 
});

const char5 =document.querySelector('#x1').addEventListener("click", function() {
    selectedCharacter.append() 
});

const char6 =document.querySelector('#x1').addEventListener("click", function() {
    selectedCharacter.append()  
});

}


function numOfBoxes(currentLevel){
    let countofbox;
if (currentLevel==1){
    countofbox=9
}else if(currentLevel==2){
    countofbox=16
}else if(currentLevel==3){
    countofbox=25
}else if(currentLevel==4){
    countofbox=36
}else if(currentLevel==5){
    countofbox=49
}else if(currentLevel==6){
    countofbox=64
}
return countofbox
}

function createBox(countofbox){
    const boxFrame=document.createElement('div')
    boxFrame.className='boxframe'
    const gameboard=document.querySelector('.gameBoard')
    gameboard.append(boxFrame)

    for(let i=1;i<=countofbox;i++){
        const boxes=document.createElement('div')
        boxFrame.append(boxes)
        boxes.setAttribute('data-cell')
        boxes.className='box'
       }

}
let createdBoxes=createBox(numOfBoxes(currentLevel));

function UpdateBoxes(createdBoxes){
    // let untaken=document.createElement('div')
    let boxframe=document.querySelector('.boxframe')
 boxframe.addEventListener('click',function(box){
box.id='selected'
 })
}
UpdateBoxes(createdBoxes);

// check if boxes already not taken
function notSelected(){
    const box=document.querySelectorAll('.box')
    if(box.id='notSelected'){
        return true;
    }
        return false;
    
}
// createBox(numOfBoxes(currentLevel));
function robotturn(){
    const mrRobot=document.querySelector('#mrRobot')
    const boxframe=document.querySelectorAll('.box')

    let choice=0
    if (!boxframe[choice].notSelected){
        choice=Math.floor((Math.random)*boxframe.length)
    }
boxframe[choice]

    }

 
function winCondition(){


}
function nextLevel(){
let nextLevel=document.querySelector('.nextLevel')
}
function tryAgain(){
let nextLevel=document.querySelector('.tryAgain').addEventListener('click',function(){
    currentLevel=1;
})
}

function goToHome(){
    // will restart and take the player to the main page
   goHome=document.querySelector('.goHome').addEventListener('click',function(){
        tryAgain()

    })
    

}