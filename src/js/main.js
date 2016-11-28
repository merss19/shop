'use strict';
import svg4everybody from 'svg4everybody';
//import $ from 'jquery'

import drop from './drop'
import autocomplete from './autocomplete'
import slider from './slider'
import modal from './modal'
import tabs from './tabs'


//drop.init()

$(() => {
    svg4everybody();
});



$('.js-drop__btn').drop()

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






var countries = [
    { value: 'MicroLab M4741'},
    { value: 'MicroLab M4741'},
    { value: 'MicroLab M4741'},
    { value: 'MicroLab M4741'},
    { value: 'MicroLab M4741'},
    { value: 'MicroLab M4741'}
];

$('.js-autocomplete').autocomplete({
    lookup: countries,
    appendTo:'.header-nav__autocomplete',
    onSearchComplete:function(){
        let parent = $(this).parent(),
            container = parent.find('.header-nav__autocomplete'),
            autocomplete = parent.find('.autocomplete-suggestions'),
            containerWidth = container.width()

        autocomplete.width(containerWidth)
    }

});


//toTop

let toTop = $('.toTop'),
    $htmlBody = $("html, body"),
    delay = 1000

    toTop.on('click',function () {
        $htmlBody.animate({
            scrollTop: 0
        }, delay);
    })

$('.js-select-metro').selectize();

/*$(window).on('scroll', function (){
    var scrollTop = $(window).scrollTop(),
        footerTop = $('footer').offset().top,
        wh = $(window).height();


    if((footerTop-60-wh) < scrollTop){

        toTop.fadeIn();

    }

    if(wh > scrollTop){
        toTop.fadeOut();
    }


});

toTop.on('click',function () {
    $htmlBody.animate({
        scrollTop: 0
    }, delay);
});*/












