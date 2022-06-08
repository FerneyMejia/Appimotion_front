const
iconoMenu = document.querySelector("#icono_menu"),
menu = document.querySelector("#menu"),
btnClose = document.getElementById("menu_icon_close");

iconoMenu.addEventListener("click", (e) => {

    menu.classList.toggle("active");
    document.body.classList.toggle("opacity");
    
});


document.getElementById("menu_icon_close").addEventListener("click", cerrar);

function cerrar(){
     menu.classList.add("active");
}




// ---------------taps_transt_t

const targets = document.querySelectorAll("[data-target]");
const contentTT = document.querySelectorAll("[data-content");



targets.forEach(target => {

    target.addEventListener("click", () => {

        contentTT.forEach(c => {
            c.classList.remove("active_trant_t_content");
        });


        const t = document.querySelector(target.dataset.target);
        t.classList.add("active_trant_t_content");
    })
});



