function mudarTema(){
    var element = document.body
    if(element.className == 'dark-theme'){
        element.setAttribute('class', "white-theme")
    }else{
        element.setAttribute('class', "dark-theme")
    }
    
    const img = document.getElementById("brand-img")
    if (img.src == "http://127.0.0.1:5500/assets/img/logo-dark.png") {
        img.src = "http://127.0.0.1:5500/assets/img/logo-white.png";
    } else {
        img.src = "http://127.0.0.1:5500/assets/img/logo-dark.png";
    }
    const img2 = document.getElementById("brand-img2")
    if (img2.src == "http://127.0.0.1:5500/assets/img/logo-dark.png") {
        img2.src = "http://127.0.0.1:5500/assets/img/logo-white.png";
    } else {
        img2.src = "http://127.0.0.1:5500/assets/img/logo-dark.png";
    }
    const b = document.getElementById('a').attributes
    if(b.class.textContent == 'svg-inline--fa fa-sun'){
        document.getElementById('temabtn').innerHTML = `<a href="javascript:void(0)"><i id="a" class="fa-solid fa-moon"></i></a>`
    }else{
        document.getElementById('temabtn').innerHTML = `<a href="javascript:void(0)"><i id="a" class="fa-solid fa-sun"></i></a>`
    }
}