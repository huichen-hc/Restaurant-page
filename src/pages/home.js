export default function homePageLoad(){
    const homeTemplate = document.querySelector("#home-template")
    const clone = homeTemplate.content.cloneNode(true)
    
    const content = document.querySelector("#content")  
    content.appendChild(clone)
}