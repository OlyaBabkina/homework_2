var image;
var flag;

function Show_menu(){
    image = document.getElementById('menu_button');
    $("#navbar").show('slow');
    image.src = 'img/close_1.png';
    flag = false;
}

function Hide_menu(){
    image = document.getElementById('menu_button');
    $("#navbar").hide();
    image.src = 'img/menu.png';
    flag = true;
}

window.onload = () =>{
    Hide_menu();
    $('.carousel').carousel()
};

function menu(e){
    if(flag == true)
        Show_menu();
    else
        Hide_menu();   
}

function scroll_tobottom(){
    var button = document.getElementsByClassName("scroll");
    var scroll_element = document.getElementsByClassName("other_pages");
    $([button, document.body]).animate({
        scrollTop: $(scroll_element).offset().top
    }, 2000);
}

