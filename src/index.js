function generatePoem(event){
    event.preventDefault();
    
    //the typewriter is responsible for the typing style
    new Typewriter("#poem", {
      strings: "Hapa ndipo umenifikisha",
      autoStart: true,
      delay:1,
      cursor:"",
    });

}

let formContentElement = document.querySelector("#form-content");
formContentElement.addEventListener("submit", generatePoem);