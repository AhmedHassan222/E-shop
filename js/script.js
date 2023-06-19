//NAV BAR SLIDELEFT.....

if(localStorage.getItem('products')!==null){
    document.querySelector('#content').innerHTML=JSON.parse(localStorage.getItem('products'));

}




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
let products=[];
let title=document.querySelectorAll('.p-box');
for (let i = 0; i < cartButtons.length; i++) {
    
    cartButtons[i].addEventListener('click',function(){
        if(cartButtons[i].parentElement.querySelector('.cartButton').innerHTML=='ADD TO CART'){
            
            toReturn += cartButtons[i].parentElement.parentElement.outerHTML///>>>>>>>>OUT THE OBJECT
            products.push(toReturn)   ///>>>>>>>FILL THE EMPTY ARRAY BY ITEMS THAT YOU CLICK
            localStorage.setItem('products',JSON.stringify(products))///>>>>>>>>>>>>>>>> ADD PRODUCTS THAT YOU CLICK IN LOCALSRORAGE
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

    document.querySelector('.payment').classList.remove('d-none')
    document.querySelector('#cartComponenet').style.cssText='overflow:hidden'
    document.querySelector('#xmark').classList.add('d-none')

})


//SEARCH INPUT


let searchResult=[];

function search (item){

    for (let x = 0; x < title.length; x++) {
        if (title[x].innerHTML.toLowerCase().includes(item.toLowerCase())==true){
            searchResult.push(title[x].innerHTML)

        }
        document.querySelector('.bg-search').innerHTML=searchResult

    
    }
    
    console.log(searchResult)
}

document.querySelector('input').addEventListener('input',function  (e){
    if(    document.querySelector('#finalResult').getAttribute('class')==='d-none'){
        document.querySelector('#finalResult').classList.remove('d-none')
        search(e.data)

    }else{
        document.querySelector('#finalResult').classList.add('d-none')

    }
})


document.querySelector('#makePayment').addEventListener('click',function(){
        document.querySelector('.payment').classList.add('d-none')
        document.querySelector('#cartComponenet').style.cssText='overflow:auto'
        document.querySelector('#xmark').classList.remove('d-none')
        document.querySelector('#buyDone').classList.remove('d-none')

        setTimeout(buyDone, 1000)

        document.querySelector('#content').innerHTML=''
        document.querySelector('#price').innerHTML= ' 0'




})
function buyDone(){
    document.querySelector('#buyDone').classList.add('d-none')

}
/**
 * $(document).ready(function(){

    //For Card Number formatted input
    var cardNum = document.getElementById('cr_no');
    cardNum.onkeyup = function (e) {
        if (this.value == this.lastValue) return;
        var caretPosition = this.selectionStart;
        var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
        var parts = [];
        
        for (var i = 0, len = sanitizedValue.length; i < len; i += 4) {
            parts.push(sanitizedValue.substring(i, i + 4));
        }
        
        for (var i = caretPosition - 1; i >= 0; i--) {
            var c = this.value[i];
            if (c < '0' || c > '9') {
                caretPosition--;
            }
        }
        caretPosition += Math.floor(caretPosition / 4);
        
        this.value = this.lastValue = parts.join('-');
        this.selectionStart = this.selectionEnd = caretPosition;
    }
    
    //For Date formatted input
    var expDate = document.getElementById('exp');
    expDate.onkeyup = function (e) {
        if (this.value == this.lastValue) return;
        var caretPosition = this.selectionStart;
        var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
        var parts = [];
        
        for (var i = 0, len = sanitizedValue.length; i < len; i += 2) {
            parts.push(sanitizedValue.substring(i, i + 2));
        }
        
        for (var i = caretPosition - 1; i >= 0; i--) {
            var c = this.value[i];
            if (c < '0' || c > '9') {
                caretPosition--;
            }
        }
        caretPosition += Math.floor(caretPosition / 2);
        
        this.value = this.lastValue = parts.join('/');
        this.selectionStart = this.selectionEnd = caretPosition;
    }
    
    // Radio button
    $('.radio-group .radio').click(function(){
        $(this).parent().find('.radio').removeClass('selected');
        $(this).addClass('selected');
    });
    
    })
 */



