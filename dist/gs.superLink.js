(function() {
    'use strict';

    angular
        .module('gs', [])
        .directive('gsSuperLink', gsSuperLink);

    function gsSuperLink() {

        return {
            restrict: 'A',
            link: function ($scope, $element, $attrs) {

                var linkUrl = $attrs.gsSuperLink;

                $element.on('click', function (event) {

                    var target = event.target,
                        elementsToSkip = ['A', 'BUTTON', 'LABEL',
                            'INPUT', 'SELECT', 'OPTION', 'OPTGROUP',
                            'TEXTAREA'
                        ];

                    if (elementsToSkip.indexOf(target.nodeName) !== -1) {

                        return;
                    }

                    window.location = linkUrl;
                });
            }
        };
    }
})();