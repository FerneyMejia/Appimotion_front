// -----------------------our_tools


const tool_Movil_title = document.getElementById("title_tool_Movil")
const tool_Web_title = document.getElementById("title_tool_Web")
const tool_Movil_description = document.getElementById("content_tool_Movil")
const tool_Web_description = document.getElementById("content_tool_Web")


 let choose = 1

 const changeContent = () =>{

     choose == 1 ? (
        tool_Movil_title.classList.value = "our_tool_btn our_tool_btn_active",
         tool_Movil_description.classList.value = "our_tool_description our_tool_description_active"
     )
     : (
         tool_Movil_title.classList.value = "our_tool_btn",
         tool_Movil_description.classList.value = "our_tool_description"
     )

     choose == 2 ? (
         tool_Web_title.classList.value = "our_tool_btn our_tool_btn_active",
         tool_Web_description.classList.value = "our_tool_description our_tool_description_active"
     )
     : (
         tool_Web_title.classList.value = "our_tool_btn",
         tool_Web_description.classList.value = "our_tool_description"
     )
 };

 tool_Movil_title.addEventListener("click", () => {
     choose = 1
     changeContent()
 });

 tool_Web_title.addEventListener("click", () => {
     choose = 2
     changeContent()
 });