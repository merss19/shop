import tabs from './tabs'
console.log('tabs-impotr')
console.log(tabs.prototype.activeGallery)


const modal = (($) => {

    const NAME                     = 'modal'
    const DATA_KEY                 = 'js-modal'
    const JQUERY_NO_CONFLICT       = $.fn[NAME]


    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

/*    let gallery = $('.js-gallery').lightSlider({
        gallery:true,
        item:1,
        thumbItem:8,
        thumbMargin:4,
        slideMargin:0
    });*/


    class Modal {

        constructor(element) {
            console.log('modal')
            this.element = element
            //console.log( this.element )

            this.Id = $(this.element).attr('data-modal')
            this.modal = $('.modal')


            this.overlay = $('.overlay_type_modal')

            this.clickHandler()
            console.log('this.modal-constr')
            console.log(this.modal)
            console.log(this.overlay)
        }


        // public

        clickHandler() {

            $(this.element).on('click',  (e)=>{
                e.preventDefault()
                this.show()
            })


        }

        show(){

            if(this.Id === "add")      this.showAdd()
            if(this.Id === "gallery") this.showGallery()

            this.overlay.on('click',() => {
                console.log('overlay')

                this.modal.fadeOut()
                this.overlay.fadeOut()
                this.modal.html('')
                console.log(this.modal)

            })

        }

        showAdd() {
            console.log('add')

            this.modalAdd = $('.modal-add').clone()

            this.modal.append(this.modalAdd)

            this.overlay.fadeIn(400)
            this.modalAdd.fadeIn(700)
            this.modal.fadeIn(700)

            //tabs.prototype.activeGallery()



            let activeTab = this.modal.find('.js-tabs__item.active')
              // $('.js-tabs').tabs()
                    console.log('activeTab')
            console.log(activeTab)


           $('.js-tabs').tabs()

            tabs.prototype.toggle(activeTab)


        }

        showGallery() {
            this.modalGallery = $('.modal-gallery').clone()
            let gal = this.modalGallery.find('.js-gallery')


            this.modal.append(this.modalGallery)

            this.overlay.fadeIn(400)
            this.modalGallery.fadeIn(700)
            this.modal.fadeIn(700)



            let gallery = gal.lightSlider({
                gallery:true,
                item:1,
                thumbItem:8,
                thumbMargin:4,
                slideMargin:0
            });

           /* let gallery = gal.bxSlider({
                minSlides: 1,
                maxSlides: 1,
                pagerCustom: '#bx-pager'
            });*/
            console.log(gallery)




            this.close =  this.modalGallery.find('.js-modal-close')



            if(this.close.length){
                console.log('close')
                console.log(this.close)
                this.close.on('click', () => {
                    this.modal.fadeOut(700)
                    this.overlay.fadeOut(400)
                    this.modal.html('')
                    //gallery.destroySlider()
                })

            }
            console.log('this.modal-close')




            //this.overlay.on('click', this.modalHide)
        }

        close(e) {

        }


        //private




        // static

        static init(config) {
            console.log('this')
            console.log( this )
            return this.each(function () {
                let data  = $(this).data(DATA_KEY)
                console.log(this)

                if (!data) {
                    $(this).data(DATA_KEY, (data = new Modal(this)))
                }
            })
        }






    }

    //$(document).on('click', Drop.close)


    $.fn[NAME]             = Modal.init
    $.fn[NAME].Constructor = Modal
    $.fn[NAME].noConflict  = function () {
        $.fn[NAME] = JQUERY_NO_CONFLICT
        return Modal.init
    }

    return Modal

})(jQuery)

/*
const modal = {

    init: function() {

        let
            btn = $('.js-modal-btn')

            if(btn.length){
                console.log('modal-click')
                btn.on('click', this.modalHandler.bind(this))
            }
        console.log('modal')
        console.log(btn)
        console.log(btn.length)
    },

    modalHandler: function(e) {
        e.preventDefault();

        let modal = document.querySelector('.modal'),
            overlay = document.querySelector('.overlay')

        $(overlay).fadeIn(400)
        $(modal).fadeIn(700)

       /!* let modalGallery = $('.modal-gallery__list').lightSlider({
            gallery:true,
            item:1,
            thumbItem:8,
            thumbMargin:4,
            slideMargin:0
        });*!/

        overlay.addEventListener('click', this.modalHide)

        /!*$('.modal-gallery__close').on('click', function(){
            $(modal).fadeOut(700)
            $(overlay).fadeOut(400)
        })*!/

        //modal-carousel

        let withCarousel = $('.js-carousel-with').lightSlider({
            item:5,
            pager:false,
            slideMargin:20

        });

        $('.js-carousel-with__next').click(function(){
            withCarousel.goToNextSlide();
        });

        $('.js-carousel-with__prev').click(function(){
            withCarousel.goToPrevSlide();
        });

        let accessCarousel = $('.js-carousel-access').lightSlider({
            item:5,
            pager:false,
            slideMargin:20

        });

        $('.js-carousel-access__next').click(function(){
            accessCarousel.goToNextSlide();
        });

        $('.js-carousel-access_prev').click(function(){
            accessCarousel.goToPrevSlide();
        });


    },

    modalHide: function() {

        let modal = document.querySelector('.modal'),
            overlay = document.querySelector('.overlay')

        $(overlay).fadeOut(400)
        $(modal).fadeOut(700)
    }

}
*/

export  default modal



