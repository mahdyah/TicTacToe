// document.addEventListener("load", handleImage);
//   const wind1=document.querySelector(".window")
//  document.addEventListener("load", () => {
//     document.querySelector(".images").addEventListener("click", handleImage);

// })

// onclick="handleImage()"
// var clicked=fale;
// let charactersImages=document.querySelectorAll('#image')
// console.log(charactersImages)
// let selectedPerson=''
// console.log(this) 


function handleImage(){
    let selectedPerson=''
    // let list=[]
    // imageFrame.append(list)
    let images=document.querySelectorAll('#image')
  console.log(images)
 images.forEach(image => {
        image.addEventListener('click', function(e){
            e.preventDefault()

        selectedPerson=this.src
            console.log(this)
            
     localStorage.setItem('selectedCharacter', selectedPerson.substring(29))
           console.log(selectedPerson)
         image.className='person'
         image.style.cssText="background-color:orange; border-radius: 10px;"
         } ) })
   
// let imageFrame=document.querySelector('.imageFrame')
// let thePersonImage=document.querySelector('.person')

// list.push(thePersonImage)
//  imageFrame.append(list)
       
//  console.log(imageFrame)
//  console.log(list)
//  console.log()
}

         handleImage();


console.log('test')
