

const drop = {

    init: function() {
        console.log('drop');

        let btns = $('.js-drop__btn')

        for(let i = 0; i < btns.length; i++){
            $(btns[i]).on('click', drop.toggle)
        }




    },

    toggle: function(e){
        console.log('toggle')
        console.log(this)

        let list = $(e.target).closest('.js-drop__root').find('.js-drop__list'),
            active = $(e.target).hasClass('active'),
            overlay = $('.overlay')



        if(!active){
            $(e.target).toggleClass('active')
            overlay.stop().fadeIn()

            list.stop().fadeIn()

            $(document).on('click', drop.close)




        }

        if(active){
            overlay.stop().fadeOut()
            $(e.target).toggleClass('active')
            console.log('out')
            list.stop().fadeOut()
            $(document).off('click', drop.close)





        }

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

drop.init()