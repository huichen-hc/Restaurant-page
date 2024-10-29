export default function menuPage(){
    const menuTemplate = document.querySelector("#menu-template")
    const clone = menuTemplate.content.cloneNode(true)
    
    const content = document.querySelector("#content")  
    content.appendChild(clone)
}