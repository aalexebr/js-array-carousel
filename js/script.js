// ora si piange

// array of images
const imgArray = []



// i=1
// const box = document.createElement("div");
// box.classList.add('box')
// document.getElementById('position').append(box)
// document.querySelector('.box').innerHTML += `<img src='${imgArray[i]}'> `

for (i=0; i <5; i++){
    imgArray[i] = `img/0${i+1}.webp`

    document.querySelector('.img-position').innerHTML += `<img src='${imgArray[i]}' class="d"> `
}

console.log(i)
console.log(imgArray)
console.log(imgArray[0])
const down = document.getElementById('down')

let count = 0
document.querySelector(`img:nth-of-type(${count+1})`).classList.add('display')

console.log(document.querySelector(`img:nth-of-type(${count+1})`))

console.log(count)
down.addEventListener('click', function(){
    count ++
    document.querySelector(`img:nth-of-type(${count})`).classList.remove('display')
    
    if(count < imgArray.length){
           
    }
    else{
        count = 0
        
    }  
    document.querySelector(`img:nth-of-type(${count+1})`).classList.add('display')
    console.log(count)
    }
)

const up = document.getElementById('up')
let count2 = 0
up.addEventListener('click', function(){
    count2 --
    document.querySelector(`img:nth-of-type(${count2})`).classList.remove('display')
    
    if(count2 < imgArray.length){
        
    console.log(count2)
    
        
    }
    else{
        count2 = 0
        console.log(count2)
    }
    
    document.querySelector(`img:nth-of-type(${count2+1})`).classList.add('display')

    }
)

// down.addEventListener('click', function(){
//     count --
//     console.log(count)
//     document.querySelector(`img:nth-of-type(${count})`).classList.remove('display')
    
    
//     if(count < imgArray.length){
        
        
//     }
//     else{
//         count=0
//     }
//     document.querySelector(`img:nth-of-type(${count+1})`).classList.add('display')
//     }
// )
// console.log(document.querySelector(`img:nth-of-type()`))
// for i=1 to <=5
//     imgArray[i] = `img/0${i}.webp`
//     if(i == 1) 

//     document.querySelector('.containerImmagini').innerHTML += `<img src="img/0${i}.webp" class="active">`


// const up = document.getElementById('up')
// const down = document.getElementById('down')

// let count = 1

// down.addEventListener('click', function(){
//     if(count < numero immagini)
//         count++
//     else
//         count = 0
//     document.querySelector(`.containerImmagini > img:nth-chidl(${count+1})`).classList.add('active')
    
//     img.src = imgArray[count]
// })



// imgArray[0] = new Image();
// imgArray[0].src = 'img/01.webp';
// imgArray[1] = new Image();
// imgArray[1].src = 'img/02.webp';
// imgArray[2] = new Image();
// imgArray[2].src = 'img/03.webp';
// imgArray[3] = new Image();
// imgArray[3].src = 'img/04.webp';
// imgArray[4] = new Image();
// imgArray[4].src = 'img/05.webp';