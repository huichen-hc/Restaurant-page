export default function AboutUsPage(){
    const AboutUsTemplate = document.querySelector("#about-us-template")
    const clone = AboutUsTemplate.content.cloneNode(true)
    
    const content = document.querySelector("#content")  
    content.appendChild(clone)
}