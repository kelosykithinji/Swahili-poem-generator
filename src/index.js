
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
  let context =
    "You are a swahili expert AI who creates funny swahili poems, please make them short. The poem should be in basic HTML.Each sententece should be in its own line <br> .do not include the html name and the quotations in the beginning and at the end.";
  let prompt = `please gererate a swahili poem  about, instructions:${poemTopicElement.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  //this code displays the hidded div that has the poem
  let poemSectionElement = document.querySelector("#poem");
  //this could have been an alternative but not the best since we dont want any css in javscript for readability purposes
  // poemSectionElement.style.display ="block";
  poemSectionElement.classList.remove("hidden");
  poemSectionElement.innerHTML = `<div class="blink">⏳Generating a swahili poem about ${poemTopicElement.value}</div>`;
  //axios is responsible to read the api, the api will not be read without it
  axios.get(apiUrl).then(displayPoem);

  console.log(apiUrl);
}

let formContentElement = document.querySelector("#form-content");
formContentElement.addEventListener("submit", generatePoem);