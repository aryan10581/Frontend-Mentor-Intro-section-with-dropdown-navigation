let ham = document.getElementById('hamb')
let menu = document.querySelector('#hamb_menu')
// function hamb(){
//     if(ham.style.display=== 'block'){
//         ham.style.display= 'none'
//         menu.style.display= 'block'
//     }
//     else{
//         ham.style.display = 'block'
//         menu.style.display= 'none'

//     }

// }
let cont = document.querySelector('.container')
ham.addEventListener('click', function(){
    menu.style.display= 'block'
    cont.style.filter = 'brightness(0.2)'
   cont.style.backgroundColor = 'white'

})
let cross = document.querySelector('#mg')

cross.addEventListener('click',function(){
   menu.style.display = 'none'
   cont.style.filter = 'brightness(1)'
   cont.style.backgroundColor = 'white'

})
let features = document.querySelector('#fea-drop')
let fea_drop = document.querySelector('#sub-fea')
features.addEventListener('mouseenter', function(){
    console.log('mousein')
    
    fea_drop.style.display= 'block'
})
features.addEventListener('mouseleave', function(){
    fea_drop.style.display= 'none'

})
let comp_dro = document.querySelector('#company-drop')

let drop = document.querySelector('#comp-dro')
comp_dro.addEventListener('mouseenter', function(){
    drop.style.display = 'block'
})
comp_dro.addEventListener('mouseleave', function(){
    drop.style.display = 'none'
})