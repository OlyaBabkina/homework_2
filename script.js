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
};
function menu(e){
    if(flag == true)
        Show_menu();
    else
        Hide_menu();   
}


