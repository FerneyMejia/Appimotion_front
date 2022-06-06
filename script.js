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




// -----------------------our_tools


// const tool_Movil_title = document.getElementById("title_tool_Movil")
// const tool_Web_title = document.getElementById("title_tool_Web")
// const tool_Movil_content = document.getElementById("content_tool_Movil")
// const tool_Web_content = document.getElementById("content_tool_Web")


// let choose = 1

// const changeContent = () =>{

//     choose == 1 ? (
//         tool_Movil_title.classList.value ="our_tool_btn our_tool_btn_active"
//         tool_Movil_content.classList.value ="our_tool_description our_tool_description_active"
//     )
//     : (
//         tool_Movil_title.classList.value ="our_tool_btn"
//         tool_Movil_content.classList.value ="our_tool_description"
//     )

//     choose == 2 ? (
//         tool_Web_title.classList.value ="our_tool_btn our_tool_btn_active"
//         tool_Web_content.classList.value ="our_tool_description our_tool_description_active"
//     )
//     : (
//         tool_Web_title.classList.value ="our_tool_btn"
//         tool_Web_content.classList.value ="our_tool_description"
//     )
// };

// tool_Movil_title.addEventListener("click", () => {
//     choose = 1
//     changeContent()
//     console.log("presion");
// });

// tool_Web_title.addEventListener("click", () => {
//     choose = 2
//     changeContent()
//     console.log("presion");
// });