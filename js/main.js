$(document).ready(function(){
    $('#menu-btn').click(function(event){
        var toggle = event.target;
        $('#nav-bar-container').toggleClass('expand minimize');
        $('#main-container').toggleClass('expand minimize');
    });

    $('#side-nav-bar ul').children().each(function() {
        if ($(this).hasClass('has-submenu')) {
            $(this).click(function(event){
                $(this).children('ul').toggleClass('collapse sub-menu');
            });
        }
    })
});



function ExpandMenu() {
    var toggle = document.querySelector('.toggle');
    var outerBox = document.querySelector('.box-outer');
    var col = document.querySelector('.adjust-toggle');

    const linkName = document.querySelectorAll('.nav-link');
    const navItem = document.querySelectorAll('.nav-item');
    const dropHover = document.querySelectorAll('.drop-hover');
    var RowAdjust = document.querySelector('.main-container.expand');
    var RowAdjust1 = document.querySelector('.expand');
    var dropDown = document.querySelector('.sideMenuDropdown');
    toggle.classList.toggle('adjust');
    
    outerBox.classList.toggle('adjust');
    dropDown.classList.toggle('adjust');
    RowAdjust.classList.toggle('adjust');
    RowAdjust1.classList.toggle('adjust');    
    col.classList.toggle('adjust');
    linkName.forEach(function(el) {
        el.classList.toggle('adjust');
    });
    navItem.forEach(function(lo) {
        lo.classList.toggle('adjust');
    });
    dropHover.forEach(function(lo) {
        lo.classList.toggle('adjust');
    });
}

// Toggle switch
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// function switchTheme(e) {
//     $(document.documentElement).attr('data-theme', function(index, attr){
//         return typeof attr === 'undefined' || attr === null || attr === '' || attr === 'dark' ? 'light' : 'dark';
//     });
// }
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 1000);
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.documentElement.classList.remove('transition');
        window.setTimeout(() => {
            document.documentElement.classList.add('transition');
        }, 1000);
    }    
}



toggleSwitch.addEventListener('change', switchTheme, false);

function sideNavDropdown() {

    // var sideNavDropdownPath = document.getElementById("icon-link");
    
    var sideNavDropdownPath = document.getElementById('#sideMenuDropdown');
    sideNavDropdownPath.classList.add('show');

    
    // sideNavDropdownPath.className="show"
    
    } 

//toast
// document.getElementById("liveToastBtn").onclick=function() {
//     var MyAlert = document.getElementById("liveToast");
//     var bsAlert = new bootstrap.Toast(MyAlert);
//     bsAlert.show();
// }





  // Get the modal
var modal = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
btn[0].onclick = function() {
    modal[0].style.display = "block";
}

btn[1].onclick = function() {
    modal[1].style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
    modal[0].style.display = "none";
}

span[1].onclick = function() {
    modal[1].style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal[0]) {
         modal[0].style.display = "none";
     }
    if (event.target == modal[1]) {
         modal[1].style.display = "none";
     }  
}