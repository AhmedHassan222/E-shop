//NAV BAR SLIDELEFT.....

$('.menu').click(function () { 
   
    
    if(document.querySelector('#xxx').getAttribute('class')=='d-none'){
        document.querySelector('#xxx').classList.remove('d-none')
        document.querySelector('.navbar-toggler-icon').classList.add('d-none')

        $('.showLeft').animate({'left':'0%'})
        document.querySelector('body').classList.add('overflow-hidden')
        document.querySelector('body').classList.remove('overflow-auto')

    }else{
        document.querySelector('.navbar-toggler-icon').classList.remove('d-none')
        document.querySelector('#xxx').classList.add('d-none')
        $('.showLeft').animate({'left':'-100%'})
        document.querySelector('body').classList.add('overflow-auto')
        document.querySelector('body').classList.remove('overflow-hidden')


    }
});





//BUTTON UPP>>>
$(window).scroll(function () { 
    if($(window).scrollTop() >=200){
        document.querySelector('nav').style.cssText='padding-block:3px !important ; '
        document.querySelector('.position-arrow-style').classList.remove('d-none')

    }else {
        document.querySelector('nav').style.cssText='padding-block:7px !important'
        document.querySelector('.position-arrow-style').classList.add('d-none')

    }
});
document.querySelector('.position-arrow-style').addEventListener('click',function (){
    window.scrollTo(0,0)
})





//addToCart HERE ------------
//---------------------------\\\\\\
let number = 0

let cartButtons=document.querySelectorAll('.cartButton')
let toReturn=' ';
let price ;
let total =0 ;
let deleted;
let title=document.querySelectorAll('.p-box');
for (let i = 0; i < cartButtons.length; i++) {
    
    cartButtons[i].addEventListener('click',function(){
        if(cartButtons[i].parentElement.querySelector('.cartButton').innerHTML=='ADD TO CART'){
            toReturn += cartButtons[i].parentElement.parentElement.outerHTML
            price=cartButtons[i].parentElement.querySelector('.price-box').innerHTML;
            total+=Number(price);
            title=cartButtons[i].parentElement.querySelector('.p-box').innerHTML;
            document.querySelector('#price').innerHTML=total
            document.querySelector('#content').innerHTML=toReturn;
            document.querySelector('#number').innerHTML=++number
            deleted=cartButtons[i].parentElement.querySelector('.cartButton').innerHTML='DELETE'
            setTimeout(message, 1000)
            document.querySelector('#numberOfProducts').classList.remove('d-none')
            document.querySelector('#addSuccess').classList.remove('d-none')
        }else{
            toReturn -= cartButtons[i].parentElement.parentElement.outerHTML
            price=cartButtons[i].parentElement.querySelector('.price-box').innerHTML;
            total-=Number(price);
            title=cartButtons[i].parentElement.querySelector('.p-box').innerHTML;
            document.querySelector('#price').innerHTML=total
            document.querySelector('#content').innerHTML=toReturn;
            document.querySelector('#number').innerHTML=--number
            deleted=cartButtons[i].parentElement.querySelector('.cartButton').innerHTML='ADD TO CART'
            setTimeout(message2, 1000)
            document.querySelector('#numberOfProducts').classList.remove('d-none')
            document.querySelector('#deleteSuccess').classList.remove('d-none')
        }

    })
    
}

document.querySelector('.cartGroup').addEventListener('click',function (){
    let allButtons=document.querySelectorAll('.cartButton')
        if(document.querySelector('#cartComponenet').getAttribute('class')==='d-none'){
            for (let i = 0; i < allButtons.length; i++) {
                allButtons[i].classList.add('d-none')

            }

            document.querySelector('.position-arrow-style').classList.add('d-none')
            document.body.style.cssText='overflow:hidden'
            document.querySelector('#cartComponenet').style.cssText='overflow:auto'
            document.querySelector('#cartComponenet').classList.remove('d-none')
            document.querySelector('#xmark').classList.remove('d-none')
            if(number===0){
                document.querySelector('#content').innerHTML="You haven't added anything to your shopping cart yet" 
                document.querySelector('#price').innerHTML= '0'        
            }
            
        }else{
            for (let i = 0; i < allButtons.length; i++) {
                allButtons[i].classList.remove('d-none')

            }
            allButtons[i].classList.remove('d-none')

            document.querySelector('#cartComponenet').classList.add('d-none')
            document.body.style.cssText='overflow:auto'
            document.querySelector('#cartComponenet').style.cssText='overflow:hidden'
            document.querySelector('.position-arrow-style').classList.remove('d-none')
            document.querySelector('#xmark').classList.remove('d-none')
            
    
    
        }
    
   
})

document.querySelector('#xmark').addEventListener('click',function(){
    let allButtons=document.querySelectorAll('.cartButton')
        if(document.querySelector('#cartComponenet').getAttribute('class')==='d-none'){
            for (let i = 0; i < allButtons.length; i++) {
                allButtons[i].classList.remove('d-none')

            }
    
            document.querySelector('.position-arrow-style').classList.add('d-none')
            document.querySelector('#cartComponenet').classList.remove('d-none')
            document.body.style.cssText='overflow:hidden'
            document.querySelector('#cartComponenet').style.cssText='overflow:auto'
            document.querySelector('a').classList.add('d-none')//remove button
            document.querySelector('#xmark').classList.remove('d-none')
        }else{
            for (let i = 0; i < allButtons.length; i++) {
                allButtons[i].classList.remove('d-none')

            }    
            document.querySelector('#cartComponenet').classList.add('d-none')
            document.body.style.cssText='overflow:auto'
            document.querySelector('#cartComponenet').style.cssText='overflow:auto'
            document.querySelector('.position-arrow-style').classList.remove('d-none')
            document.querySelector('a').classList.remove('d-none')//show button
            document.querySelector('#xmark').classList.add('d-none')
           
    
        }
    
    
})



function message(){
    document.querySelector('#addSuccess').classList.add('d-none')

}

function message2(){
    document.querySelector('#deleteSuccess').classList.add('d-none')

}



//buyAll function....????
document.querySelector('#buyAll').addEventListener('click',function (){
    //buy all
    

})


//SEARCH INPUT

document.querySelector('input').addEventListener('input',function  (e){
    
    search(e.data)
})

function search (item){

    let searchResult=[];
    for (let x = 0; x < title.length; x++) {
        if (title[x].innerHTML.toLowerCase().includes(item.toLowerCase())==true){
            searchResult.push(title[x].innerHTML)
        }
    }
    
    console.log(searchResult)
}

document.querySelector('input').addEventListener('clcik',function(){
    if(    document.querySelector('#finalResult').getAttribute('class')==='d-none'){
        document.querySelector('#finalResult').classList.remove('d-none')
        
        document.querySelector('.bg-search').innerHTML=searchResult
    }else{
        document.querySelector('#finalResult').classList.add('d-none')

    }
})


