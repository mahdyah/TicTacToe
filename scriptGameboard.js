

let currentLevel=1
function numOfBoxes(currentLevel) {
    let countofbox;
    if (currentLevel == 1) {
        countofbox = 9
    } else if (currentLevel == 2) {
        countofbox=16
    } else if (currentLevel == 3) {
        countofbox = 25
    } else if (currentLevel == 4) {
        countofbox = 36
    } else if (currentLevel == 5) {
        countofbox = 49
    }
    return countofbox
}
 let countofbox = numOfBoxes(currentLevel)

let rowColumn = Math.sqrt(countofbox)

function BoxFrame(rowColumn,currentLevel) {
    const gameboard = document.querySelector('.gameBoard')
    for (let i = 0; i < rowColumn; i++) {
        const boxFrame = document.createElement('div')
        boxFrame.className = 'boxframe'
        gameboard.append(boxFrame)
        for (let j = 0; j < rowColumn; j++) {
            const boxes = document.createElement('div')
            boxes.className = 'box'
            boxFrame.append(boxes)
        }
    }
    const boxes = document.querySelectorAll('.box')
    console.log(boxes)
    const boxFrame = document.querySelectorAll('.boxframe')
    if (currentLevel == 1) {
        gameboard.style.cssText = " position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); display:grid; grid-template-columns:repeat(3,100px);  row-gap:3px; column-gap:5px;width:306px"
    }
    else if (currentLevel == 2) {
        gameboard.style.cssText = "position:fixed; top:50%; left:45%; transform: translate(-50%,-50%); display:grid; grid-template-columns:repeat(4,100px);  row-gap:3px; column-gap:5px;width:306px"
    }
    if (currentLevel == 3) {
        gameboard.style.cssText = "position:fixed; top:50%; left:40%; transform: translate(-50%,-50%); display:grid; grid-template-columns:repeat(5,100px);  row-gap:3px; column-gap:5px;width:306px"
    }
    if (currentLevel == 4) {
        gameboard.style.cssText = "position:fixed; top:50%; left:35%; transform:translate(-50%,-50%); display:grid; grid-template-columns:repeat(6,100px);  row-gap:3px; column-gap:5px;width:306px"
    }
    if (currentLevel == 5) {
        gameboard.style.cssText = "position:fixed; top:50%; left:35%; transform:translate(-50%,-50%);display:grid; grid-template-columns:repeat(7,100px);  row-gap:3px; column-gap:5px;width:306px"
    }
    boxes.forEach(box => {
        box.style.cssText = " height:100px; background-color:hsl(29, 64%, 84%)"
    });
    boxFrame.forEach(subArr => {
        subArr.style.cssText = "display:grid; width:103px;row-gap:3px; column-gap:3px ;"
    })
}
let completeBoxes=BoxFrame(rowColumn,currentLevel);

function boxSelected() {
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(box => {
        box.addEventListener('click', function () {
            box.className = 'selected'
        })
    })
}
boxSelected();


const startbtn = document.querySelector('.start')





function nextLevel(currentLevel) {
    while(currentLevel<=5){
    document.querySelector('.nextLevel').addEventListener('click', function () {
        
        currentLevel++;
        // completeBoxes
         
         BoxFrame(rowColumn,currentLevel)
        }
    )
    return currentLevel;
     }  }
nextLevel(currentLevel)


function tryAgain() {
    document.querySelector('#tryAgain').addEventListener('click', function () {
        numOfBoxes(currentLevel)
        BoxFrame(rowColumn)
    })
}
tryAgain()
let images=["./assets/005-girl.png"]
// let selectedPerson=''(
let selectedCharacter= localStorage.getItem('selectedCharacter')
console.log(selectedCharacter)
console.log(selectedCharacter)

function playerRotation(countofbox) {
    let i = 1
    let robot = document.querySelector('.robot')
    let boxes = document.querySelectorAll('.box')
console.log(boxes)
    boxes.forEach(box => {

        // console.log(box)
        
        if (box.className != 'selected') {

            box.addEventListener('click', function () {
                //   images.forEach(image => {
             
                    // box.style.backgroundImage=image
                   
                    // if (box.className == 'person') {
                       
                       if (i % 2 !== 0) {
                        box.style.backgroundImage=`url(./assets/${selectedCharacter})`
                    //     box.style.backgroundImage=`url(./assets/${selectedCharacter})`
                    //         box.append(image)
                        } else {
                          box.style.backgroundImage=`url(./assets/ai.png)`
                    //         randomVacantBox(countofbox).append(robot)
                         }
                    i++
                    
            })
        }
    })
// randomVacantBox(countofbox)
}


playerRotation(countofbox)

//============================================>1

function isDiagonalyLeftToRightSame(rowColumn){
    let boxs = document.querySelectorAll('.box')
    let box=[]
    
    for (let i = 0; i < boxs.length; i += rowColumn) {
        const subArray =boxs.slice(i, i + rowColumn);
    box.push(subArray)
    }
    let result
    for (let i=0;i<box.length;i++){
        if (box[i][i]==box[0][0]){
            // console.log(box[i][i] +" compare " +box[0][0])
     result=true
 }else{
 result= false
 }
        }
       return result
    }
//    let isDLR=isDiagonalyLeftToRightSame()
    //============================================>2
    function isDiagonalyRightToLeftSame(){
        let boxs = document.querySelectorAll('.box')
        let box=[]
        
        for (let i = 0; i < boxs.length; i += rowColumn) {
            const subArray =boxs.slice(i, i + rowColumn);
        box.push(subArray)
        }

        let boxlength=box.length-1
        let result;
            for (let i=0;i<box.length;i++){
                
            //   console.log((box[i][boxlength]) +" compare "+ (box[0][box.length-1]))
                 if((box[i][boxlength])==box[0][box.length-1]){
                 result=true
            }else{
                result=false
            }
            boxlength--
           
             }
             return result
        }
    //    let isDRL=isDiagonalyRightToLeftSame()

//============================================>3
 function isVerticalySame(){
     let boxs = document.querySelectorAll('.box')
    let box=[]
    
    for (let i = 0; i < boxs.length; i += rowColumn) {
        const subArray =boxs.slice(i, i + rowColumn);
    box.push(subArray)
    }
let results=[]
let result=true;
let finalResult

  for (let j=0; j< box.length ;){
for (let i=1; i< box.length ;i++){

 if(box[j][i]==box[j][0]){
  results.push(true)

 }else{
  console.log("False")
  }}
 
 j++
}
  if (results !=null){
  finalResult=true
    return finalResult;
  } }
//  let isSameV=isVerticalySame()

 
 //============================================>4

//is one of the ith element of each sub array
 function isHorizontalySame(){
    let boxs = document.querySelectorAll('.box')
    let box=[]
    
    for (let i = 0; i < boxs.length; i += rowColumn) {
        
        const subArray =boxs.slice(i, i+rowColumn);
    box.push(subArray)
    }
let results=[]
let result=true;
let finalResult
let i;
let j;

  for ( j=0; j< box.length ;){
 for (i=1; i< box.length ;i++){
   console.log(box[i][j] + " compare "+box[0][j])    // gets every ith element of each sub array


 if(box[i][j]==box[0][j]){
  results.push(true)

 }
 
}
   j++
    
}
  if (results !=null){
   finalResult=true
   //  return finalResult;
   }
   console.log(finalResult) 
 console.log(results)
return finalResult
 }
//  let isSameH= isHorizontalySame()
 
 
   
 function winCondition() {
    let result
 document.querySelector('.WinpopUp').style.visibility = 'hidden'
 document.querySelector('.LoosePopUp').style.visibility = 'hidden'

 if(isHorizontalySame()==true|| isHorizontalySame()==true || isDiagonalyRightToLeftSame()==true || isDiagonalyLeftToRightSame()==true){
    // if(isDLR===true){
 document.querySelector('.WinpopUp').style.visibility = 'visible'
 result=true
}else{
    document.querySelector('.LoosePopUp').style.visibility = 'visible'
    result=false
}
console.log(result)
return result

}

function buttonsFunc() {
    document.getElementById('nextLevel').style.visibility = 'hidden'
    document.getElementById('tryAgain').style.visibility = 'hidden'

    if (winCondition()===true) {

        document.getElementById('tryAgain').style.visibility = 'visible'

    } else {
        document.getElementById('nextLevel').style.visibility = 'visible'
    }
}
buttonsFunc();

   
   



// function randomVacantBox(countofbox) {
//     let randomVacantBox
//     let random = (Math.floor((Math.random()) * countofbox.length))
//     let boxes = document.querySelectorAll('.box')
//     for (let i = 0; i < countofbox; i++) {
//         if (boxes[random].className != 'selected') {
//             randomVacantBox=boxes[random]
//             console.log(randomVacantBox)
//         }
//     }
   
//      return randomVacantBox
  
// }
