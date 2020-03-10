const app = {};

app.scroll = function() {
    $('a').on('click', function(e) {
        e.preventDefault();
    });
    $('a').smoothScroll({
        speed: 1000
    });
};

app.buttonAction = function() {
    $('button').on('click', function(e) {
        e.preventDefault();
    });
};

app.navCollapse = function() {
    const windowSize = $(window).width();
    const minWindow = 850;

    if (windowSize <= minWindow) {
        $('a[href^="#"]').on('click', function() {
            $('input[type="checkbox"]').prop('checked', false);
        });
    }
}

app.init = function() {
    app.scroll();
    app.buttonAction();
    app.navCollapse();
};

$(function() {
    app.init();
});