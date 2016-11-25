'use strict';
import svg4everybody from 'svg4everybody';
//import $ from 'jquery'

import drop from './drop'
import autocomplete from './autocomplete'
import slider from './slider'
import modal from './modal'
import tabs from './tabs'


drop.init()

$(() => {
    svg4everybody();
});



//$('.js-drop__btn').drop()

$('.js-tabs').tabs()

let btns = $('.js-toggle-view'),
    list = $('.js-view-list')

$('.js-modal-btn').modal()



    btns.on('click','.js-toggle-item', function(){
        console.log(this)

        if($(this).hasClass('active')) return
        $(this).toggleClass('active').siblings().toggleClass('active')
        list.toggleClass('list-view')
    })


//wish

    $('.js-wish').on('click', function(){
        console.log(this)
            $(this).toggleClass('active')
    })

//cart

    let cart= $('.js-cart')

    if(cart.length){

        cart.on('click', '.js-cart__delete', (e) =>{

            let product = $(e.target).closest('.js-cart__product'),
                container =$(e.target).closest('.js-cart'),
                empty = container.siblings('.js-empty')

            product.remove()
            let products = container.find('.js-cart__product')

            console.log(products.length)

            if(!products.length){
                container.css('display', 'none')
                empty.css('display', 'block')
            }


        })
    }


let headerTop = $('.header-nav').offset().top

$(window).on('scroll',() => {
    let scrollTop = $(window).scrollTop()



    if(scrollTop > headerTop){
        $('.header-nav').css('position', 'fixed').css('top', '0')
    } else {
        $('.header-nav').css('position', 'static').css('top', 'auto')
    }






})



let card = $('.detail-card'),
    gallery = card.find('.js-gallery'),
    next = card.find('.js-next')

let gall = gallery.lightSlider({
    pager:false,
    item:5
});


    next.click(function(){
        gall.goToNextSlide();
    });


/*

let bt = $('.js-drop__btn')
console.log('btns');
console.log(bt);
for(let i = 0; i < bt.length; i++){
    $(bt[i]).on('click', toggle)
}

        function toggle(e){

        console.log('toggle')
        console.log(this)

        let list = $(e.target).closest('.js-drop__root').find('.js-drop__list'),
            active = $(e.target).hasClass('active'),
            overlay = $('.overlay_type_drop')



        if(!active){
            console.log('in')
            $(e.target).addClass('active')
            overlay.stop().fadeIn()

            list.stop().fadeIn()

            //$(document).on('click', drop.close)

        }

        if(active){
            console.log('out')
            overlay.stop().fadeOut()
            $(e.target).removeClass('active')
            list.stop().fadeOut()
            $(document).off('click', drop.close)

        }

    }
*/












