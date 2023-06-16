// ora si piange

// array of images
let imgArray = []
imgArray[0] = new Image();
imgArray[0].src = 'img/01.webp';
imgArray[1] = new Image();
imgArray[1].src = 'img/02.webp';
imgArray[2] = new Image();
imgArray[2].src = 'img/03.webp';
imgArray[3] = new Image();
imgArray[3].src = 'img/04.webp';
imgArray[4] = new Image();
imgArray[4].src = 'img/05.webp';



// create .box div
// const box = document.createElement('div')
// box.classList.add('box')
// document.getElementById('position').append(box)


// create <img> (check to work)
// const img = document.createElement('img')
// img.src =imgArray[0].src;
// box.append(img)
const up = document.getElementById('up')
const down = document.getElementById('down')

// cycle
//             img.src = imgArray[0].src;
//             box.append(img)
//             box.classList.add('display')
//             let scope = 0
// down.addEventListener('click',
//     function(){
//         scope = 1
//         for (let i = 0; i<imgArray.length; i++){
            
//             if(scope =1){
//                 img.src = imgArray[(i)].src;
//                 box.append(img)
//                 box.classList.add('display')

//                 console.log(imgArray[i])
            
//             }  
            

//         }
//     }   
// )

for (let i=0; i<imgArray.length; i++){


    const box = document.createElement('div')
    box.classList.add('box')
    document.getElementById('position').append(box)
    let img = document.createElement('img')
    img.src = imgArray[(i)].src;
    box.append(img)
    box.classList.add('display')
}