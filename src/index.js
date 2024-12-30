
//this function receives the api and displays the poem
function displayPoem(response){
  console.log(response.data);
  //the typewriter is responsible for the typing style
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

//this function calls the api 
function generatePoem(event){
    event.preventDefault();
    let poemTopicElement = document.querySelector("#poem-topic");
    let apiKey = "10cf3413810a7bc0175f0o294a8aatbf";
    let context = "You are a swahili expert AI who creates funny swahili poems, please make them short. The poem should be in basic HTML.Each sententece should be in its own line <br> .do not include the html name and the quotations in the beginning and at the end." ;
    let prompt = `please gererate a swahili poem  about, instructions:${poemTopicElement.value}`;
    let apiUrl =
      `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
      
//axios is responsible to read the api, the api will not be read without it
      axios.get(apiUrl).then(displayPoem);
   
console.log(apiUrl);
   
    

}

let formContentElement = document.querySelector("#form-content");
formContentElement.addEventListener("submit", generatePoem);