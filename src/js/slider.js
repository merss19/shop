
import $ from 'jquery'


const slider = (($) => {
    console.log('slider')



    $('#price').ionRangeSlider({
        type: "double",
        grid: false,
        min: 0,
        max: 1000,
        from: 200,
        to: 800,
        postfix: " o"
    });



})(jQuery)

export default slider

