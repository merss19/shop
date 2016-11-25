
import $ from 'jquery'

const autocomplete = (($) => {

    const autocomplete = {
        init: function() {
            var products = [
                "Ruby",
                "Scala",
                "Scheme"
            ];
            $( '.js-autocomplete' ).autocomplete({
                source: products
            });

        }
    }
    return autocomplete


})(jQuery)

export default autocomplete