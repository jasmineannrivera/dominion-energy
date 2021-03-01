"use strict";
(function () {



$("#show-mobile-footer").click(function() {
    $("#expanded-text").toggleClass("d-none");
});

$("#yellow").hover(
    function() {
        $(this).css("background-color", "#E0A526");
    },
    function() {
        $(this).css("background-color", "#FEDB01")

    }
);





})();