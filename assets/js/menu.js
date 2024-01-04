function menu(){
    const ul = document.getElementById('ul-menu')
    const menu_list = document.getElementById('listmenu')
    if(ul.className == 'nada'){
        ul.setAttribute('class', "responsive")
        menu_list.setAttribute('class', "")
    }else{
        ul.setAttribute('class', "nada")
        menu_list.setAttribute('class', "list-menu")
    }
}
window.addEventListener("resize", (event) => {
    document.getElementById('ul-menu').setAttribute('class', "nada");
    document.getElementById('listmenu').setAttribute('class', "list-menu")
});