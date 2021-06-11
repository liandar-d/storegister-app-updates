$(document).ready(function () {
    $('#menu-btn').click(function (event) {
        var toggle = event.target;
        $('#nav-bar-container').toggleClass('expand minimize');
        $('#main-container').toggleClass('expand minimize');
    });

    $('#side-nav-bar ul').children().each(function () {
        if ($(this).hasClass('has-submenu')) {
            $(this).click(function (event) {
                $(this).children('ul').toggleClass('collapse sub-menu');
            });
        }
    })
});

// Toggle switch
function switchTheme(e) {
    $(document.documentElement).attr('data-theme', function (index, attr) {
        return typeof attr === 'undefined' || attr === null || attr === '' || attr === 'light' ? 'dark' : 'light';
    });
}

document.querySelector('.theme-switch input[type="checkbox"]').addEventListener('change', switchTheme, false);