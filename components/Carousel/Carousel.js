/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function carousel(){

    //create elements
    const carousel = document.createElement('div'),
          left_button = document.createElement('div'),
          img_container = document.createElement('div'),
          img1 = document.createElement('img'),
          img2 = document.createElement('img'),
          img3 = document.createElement('img'),
          img4 = document.createElement('img'),
          right_button = document.createElement('div');

    //add classes
    carousel.classList.add('carousel');
    left_button.classList.add('left-button');
    right_button.classList.add('right-button');
    img_container.classList.add('img-container');
    img1.classList.add('show');
 

    //add properties
    img1.src = '../assets/carousel/mountains.jpeg';
    img2.src = '../assets/carousel/computer.jpeg';
    img3.src = '../assets/carousel/trees.jpeg';
    img4.src = '../assets/carousel/turntable.jpeg';

    //add content
    left_button.textContent = '◀';
    right_button.textContent = '▶';

    //append items
    carousel.appendChild(left_button);
    carousel.appendChild(img_container);
    img_container.appendChild(img1);
    img_container.appendChild(img2);
    img_container.appendChild(img3);
    img_container.appendChild(img4);
    carousel.appendChild(right_button);

    //carousel functionality

    let imgArray = [img1,img2,img3,img4];

    //   right_button.addEventListener('click', () =>{
    //     for(let i =0; i < imgArray.length; i++){
    //       imgArray[i].classList.toggle('hide');
    //       imgArray[i].classList.toggle('show');
    //     }
    // })
    let cycle = 0;
      right_button.addEventListener('click', () =>{

        for(let i=0; i < imgArray.length; i++){
          if(i !== 3){
            console.log(`Image ${i} of ${imgArray.length}`)
            imgArray[i].classList.toggle('show');
            imgArray[i++].classList.toggle('show');
          }
          
          
         
        }



        // if(cycle < imgArray.length){
        //   imgArray[cycle].classList.toggle('show');
        //   imgArray[cycle+1].classList.toggle('show');
        //   cycle++;
        //   console.log(`Image ${cycle} of ${imgArray.length}`);
        //     if(cycle === imgArray.length-1){
        //       // console.log(`Image ${imgArray[cycle]} of ${imgArray.length}`);
        //       cycle = 0;  
        //       imgArray[cycle].classList.toggle('show');
        //       console.log(`the cycle is ${cycle}`);  
        //     } 
        // }

      })
      // left_button.addEventListener('click', () =>{
      //   if(cycle < imgArray.length){
      //     imgArray[cycle].classList.toggle('show');
      //     imgArray[cycle-1].classList.toggle('show');
      //     cycle++;
      //     console.log(cycle);
      //       if(cycle === imgArray.length-1){
      //         console.log(imgArray[cycle]);
      //         imgArray[cycle].classList.toggle('show');
      //         cycle = 0;  
      //         imgArray[cycle].classList.toggle('show');
      //         console.log(`the cycle is ${cycle}`);  
      //       } 
      //   }

      // })
    return carousel;

}

//select parent element
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(carousel());