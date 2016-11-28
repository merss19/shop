
const tabs = (($) => {

    const NAME                     = 'tabs'
    const DATA_KEY                 = 'js-tabs'
    const JQUERY_NO_CONFLICT       = $.fn[NAME]


    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */



    class Tabs {

        constructor(element) {
            this.element = element

          this.clickHandler()
  /*          this.gallery = block.find('.js-gallery')



            console.log('tabs-constr')*/
        }


        // public

        clickHandler() {
            console.log('tabs0')
            console.log(this.element)
            $(this.element).on('click', '.js-tabs__item', (e) =>{
                console.log('tabs')
                console.log(this)
                let $this = $(e.target)
                this.toggle($this)
            })
        }

        toggle(element){
            console.log('toggle')
            console.log(element)
            let $this = element,
                link =$this.attr('data-id'),
                content = $this.closest('.js-tabs').siblings('.js-tabs__content'),
                navs = $this.closest('.js-tabs').find('.js-tabs__item')

            this.block = content.find(link)

            for(let i = 0; i < navs.length; i++){
                $(navs[i]).removeClass('active')
                $(navs[i]).parent().removeClass('active')
            }


            $this.addClass('active')
            $this.parent().addClass('active')

            this.block.siblings().removeClass('active')
            this.block.addClass('active')

            this.gallery()

        }

        gallery(){
            let gallery = this.block.find('.js-gallery')
            console.log('tabs-gallery0')
            console.log(gallery)
            if(gallery.length){
                console.log('tabs-gallery')

                let gall =gallery.lightSlider({
                    item:5,
                    pager:false,
                    slideMargin:20
                });

                let next =  this.block.find('.js-next'),
                    prev =  this.block.find('.js-prev')



                next.click(function(){
                    gallery.goToNextSlide();
                });

                prev.click(function(){
                    gallery.goToPrevSlide();
                });

            }



        }

        activeGallery() {
            this.isGallery = $(this.element).closest('.js-tabs').siblings('.js-tabs__content').find('.js-tabs__box.active')

            console.log('this.isGallery')
            //console.log($(this.element).closest('.js-tabs').siblings('.js-tabs__content'))
            let activeTab = $(this.element).siblings('.js-tabs__content').find('.js-tabs__box.active')

            if(activeTab.length){
                let gallery = activeTab.find('.js-gallery')

                let gall =gallery.lightSlider({
                    item:5,
                    pager:false,
                    slideMargin:20
                });



            }
        }



        close(e) {

        }


        //private




        // static

        static init(config) {
            return this.each(function () {
                let data  = $(this).data(DATA_KEY)


                if (!data) {
                    $(this).data(DATA_KEY, (data = new Tabs(this)))
                }

                if (typeof config === 'string') {
                    if (data[config] === undefined) {
                        throw new Error(`No method named "${config}"`)
                    }
                    data[config]()
                }
            })
        }






    }



    $.fn[NAME]             = Tabs.init
    $.fn[NAME].Constructor = Tabs
    $.fn[NAME].noConflict  = function () {
        $.fn[NAME] = JQUERY_NO_CONFLICT
        return Tabs.init
    }

    return Tabs

})(jQuery)


export  default tabs



