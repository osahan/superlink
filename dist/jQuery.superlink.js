(function ($) {
    $.fn.superLink = function () {

        $(this).on("click", function (event) {

            var $this = $(this),
                target = $(event.target),
                link = $this.attr("gs-super-link"),
                elementsToSkip = ['A', 'BUTTON', 'LABEL',
                                'INPUT', 'SELECT', 'OPTION', 'OPTGROUP',
                                'TEXTAREA'];

            if ($.inArray(target.nodeName, elementsToSkip) !== -1) {
                return;
            }
            window.location = link;
        });
    };
})(jQuery);