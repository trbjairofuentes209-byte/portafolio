const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 300){

        btnTop.classList.add("show");

    }else{

        btnTop.classList.remove("show");

    }

});

btnTop.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

const modo = document.getElementById("modoOscuro");

modo.addEventListener("click", ()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        modo.textContent="☀️";

    }else{

        modo.textContent="🌙";

    }

});

