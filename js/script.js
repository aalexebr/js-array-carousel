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

    document.querySelector('.img-position').innerHTML += 
    `<img src='${imgArray[i]}' class=""> `
}

console.log(i)
console.log(imgArray)
console.log(imgArray[0])
const down = document.getElementById('down')

let count = 1
document.querySelector(`img:nth-of-type(${count})`).classList.add('display')

console.log(document.querySelector(`img:nth-of-type(${count+1})`))

console.log('out of function count',count)
down.addEventListener('click', 
    function(){
        if(count < imgArray.length){
            // order of execution
            // 1 step is removes the display on the current image
            // THEN increases count by 1 (count++)
            // then adds display to the new count number
            document.querySelector(`img:nth-of-type(${count})`).classList.remove('display') 
            count ++ 
            document.querySelector(`img:nth-of-type(${count})`).classList.add('display') 
        }
        else{
                
            console.log('end',count)
        }  
        
        }
)

const up = document.getElementById('up')
up.addEventListener('click', 
    function(){
        if(count > 1){
            document.querySelector(`img:nth-of-type(${count})`).classList.remove('display') 
            count --
            document.querySelector(`img:nth-of-type(${count})`).classList.add('display') 
        }
        else{
                
            console.log('end',count)
        }  
        
    }
)



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