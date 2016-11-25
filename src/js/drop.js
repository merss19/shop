//import $ from 'jquery'



/*
const drop = (($) => {

    const NAME                     = 'drop'
    const DATA_KEY                 = 'bs.dropdown'
    const JQUERY_NO_CONFLICT       = $.fn[NAME]


    /!**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     *!/

    class Drop {

        constructor(element) {
            this.element = element

      /!*      console.log('drop')

            console.log( this.element)*!/

            this.list = $(this.element).closest('.js-drop__root').find('.js-drop__list')
               this.overlay = $('.overlay_type_drop')
            this.addEventListeners()

            //$(document).on('click', this.close)

        }


        // public

        addEventListeners() {

            $(this.element).on('click', this.toggle.bind(this))

        }

        toggle(e) {
            //console.log('toggle')

            console.log('toggle')
            console.log(!!$(this.element).hasClass('active'))
            if ($(this.element).hasClass('active')){
                console.log('toggle-hide')
                this.hide()
                return
            }
            console.log('show')
          // let active = $(this.element).hasClass('active')

                console.log('in')
                //$(document).off('click.close', this.close.bind(this))
                $(this.element).addClass('active')
                this.overlay.fadeIn()

                this.list.fadeIn()



                    $(window).on('scroll',() =>{
                        let scrollTop =  $(window).scrollTop(),
                            top = 213 - scrollTop
                            if(top < 0 ){
                                top = 0
                            }
                        console.log(scrollTop)


                        this.overlay.css('top', ( top))

                    })






          /!*  if (active) {
                console.log('out')
                this.overlay.fadeOut()
                $(this.element).removeClass('active')

                this.list.stop().fadeOut()



            }*!/

        }

        hide(){
            if (!$(this.element).hasClass('active')) return

                console.log('hide')
                this.overlay.fadeOut()
                $(this.element).removeClass('active')

                this.list.stop().fadeOut()




        }


        close(e) {
            console.log('close')
       /!*     let active = $(this.element).hasClass('active')
            console.log('close')
            if ($(e.target).closest('.js-drop__list').length || $(e.target).hasClass('.js-drop__list')) {
                $(this.overlay).off('click.close', this.close.bind(this))
                return
            }
            console.log('close-action')
            this.overlay.fadeOut()
            this.list.stop().fadeOut()
            $(this.element).toggleClass('active')
            $('body').off('click.close', this.close.bind(this))*!/
            //this.overlay.fadeOut()
        /!*    if (!$(e.target).closest('.js-drop__list')) {
                list.fadeOut()
            }


            let
            btns = $('.js-drop__btn')
                 $(document).on('click', function (e) {
                    console.log($(e.target).closest('.js-drop__list'))
                    if (!$(e.target).closest('.js-drop__list')) {
                        list.fadeOut()
                    }
                }) *!/
        }


        //private




        // static

        static init(config) {
            return this.each(function () {
                let data  = $(this).data(DATA_KEY)
                console.log(this)

                if (!data) {
                    $(this).data(DATA_KEY, (data = new Drop(this)))
                }
            })
        }






    }

    //$(document).on('click', Drop.close)


    $.fn[NAME]             = Drop.init
    $.fn[NAME].Constructor = Drop
    $.fn[NAME].noConflict  = function () {
        $.fn[NAME] = JQUERY_NO_CONFLICT
        return Drop.init
    }

    return Drop

})(jQuery)
*/




const drop = {

    init: function() {
        console.log('dropgggggggggggg');

        let btns = $('.js-drop__btn')
        console.log('btns');
        console.log(btns);
        for(let i = 0; i < btns.length; i++){
            $(btns[i]).on('click', drop.toggle)
        }




    },
/*

    toggle: function(e){
        console.log('toggle')
        console.log(this)

        let list = $(e.target).closest('.js-drop__root').find('.js-drop__list'),
            active = $(e.target).hasClass('active'),
            overlay = $('.overlay_type_drop')



        if(!active){
            console.log('in')
            $(e.target).addClass('active')
            overlay.stop().fadeIn(50)

            list.stop().fadeIn(50)

            //$(document).on('click', drop.close)




        }

  /!*      if(active){
            console.log('out')
            overlay.stop().fadeOut(50)
            $(e.target).removeClass('active')
            console.log('out')
            list.stop().fadeOut(50)
            $(document).off('click', drop.close)





        }*!/

    },
*/

    toggle(e) {
        //console.log('toggle')

        console.log('toggle')
        console.log(!!$(e.target).hasClass('active'))
        if ($(e.target).hasClass('active')) {
            console.log('toggle-hide')
            drop.hide(e)
            return
        }
        $('.js-drop__list').css('display', 'none')
        $('.js-drop__btn').removeClass('active')


        let list = $(e.target).closest('.js-drop__root').find('.js-drop__list'),
            overlay = $('.overlay_type_drop')

        console.log('show')


        console.log('in')
        console.log(e.target)
        $(e.target).addClass('active')
            overlay.stop(true).fadeIn()

            list.stop(true).fadeIn()


        $(window).on('scroll', () => {
            let scrollTop = $(window).scrollTop(),
                top = 213 - scrollTop
            if (top < 0) {
                top = 0
            }
            console.log(scrollTop)


            overlay.css('top', ( top))

        })


            setTimeout(function() {
                    $(overlay).on('click',(e)=>{
                        let target = $(e.target)
                        if(target.hasClass('js-drop__btn') || target.closest('.js-drop__list').length) return
                            console.log('close')

                            let btns = $('.js-drop__btn')
                            overlay.stop(true).fadeOut()
                            list.stop(true).fadeOut()

                            for(let i = 0; i < btns.length; i++){
                                $(btns[i]).removeClass('active')
                            }




                    })

            }, 10);



    },

    hide(e){

        if (!$(e.target).hasClass('active')) return


        let list = $(e.target).closest('.js-drop__root').find('.js-drop__list'),
            overlay = $('.overlay_type_drop')

        console.log('hide')
        overlay.stop(true).fadeOut()
        $(e.target).removeClass('active')

        list.stop(true).fadeOut()




    },



    close: function(e){
        console.log('close')

       /* if(!$(e.target).closest('.js-drop__list')){
            list.fadeOut()
        }*/

        let btns = $('.js-drop__btn')
      /*  $(document).on('click', function(e){
            console.log($(e.target).closest('.js-drop__list'))
            if(!$(e.target).closest('.js-drop__list')){
                list.fadeOut()
            }
        })*/


    }



}



export default drop