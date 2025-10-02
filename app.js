//creating listner
//addEventListeners


// let btn = document.getElementById("btn");
// function test(){
//     console.log("button clicked");
// }
// btn.addEventListener('click',test)

// btn.addEventListener('click', (e)=>{
//     console.log(e.target.innerText + ' button clicked');
// })


// querySelectorAll :-for selecting multiple buttons
// let btns = document.querySelectorAll('button');
// btns.forEach((btn)=>{
//     btn.addEventListener('click', (e)=>{
//         let btn=e.target;
//         console.log(btn.innerText +' clicked');
//         btn.innerText = " clicked";
//         btn.setAttribute('disabled', 'true');
//     })
// })

// on mouse in 
// on mouse out
// on change
// on key up
// on key down
// scroll 
// load    

// querySelectorAll :-for selecting multiple buttons or elements
// querySelector :-for selecting single button or element


// let demo = document.querySelector('.demo');
// demo.addEventListener('mouseover', ()=>{
//     console.log('cursor is on box.')
// })

// demo.addEventListener('mouseout', ()=>{
//     console.log('cursor is out of box.')
// })
// let alert = document.querySelector('.alert');
// let demo = document.querySelector('.demo');
// demo.addEventListener('mouseover', ()=>{
//     alert.innerText='cursor is on box.'
// })

// demo.addEventListener('mouseout', ()=>{
//       alert.innerText='cursor is out of box'
// })


// on change
// let inputs = document.querySelectorAll('input');
// inputs.forEach((input)=>{
//     input.addEventListener('change', ()=>{
//         console.log(input.value);
//     })})

// mouse up : it will work  when we release the mouse button
// mouse down : it will work when we press the mouse button

// let input = document.querySelector('input');
// input.addEventListener('keydown', (e)=>{
//     console.log(input.value);
// })

// let input = document.querySelector('input');
// input.addEventListener('keyup', (e)=>{
//     console.log(input.value);
// })

// load event : it will work when the page is loaded
// scroll event : it will work when we scroll the page
// let loader = document.querySelector('#loader');
// loader.classList.remove('hidden');
// loader.classList.add('page-loader');
// window.addEventListener('load', ()=>{
//     loader.classList.add('hidden');
//     loader.classList.remove('page-loader');
   
// })


// scroll event: it will work when we scroll the page

// window.addEventListener('scroll', ()=>{
//     console.log('scrolled');
// })


let btn = document.querySelector('.help');
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 300){
        btn.classList.add('show');
    }else{
        btn.classList.remove('show');
    }
    
})