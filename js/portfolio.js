const GITHUB_URL = "https://github.com/jonathanbenisty";
init();

fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    const profileName = document.getElementById("Jonathan-Benisty");
  });



 function myFunction() {
  let techno = [' HTML', ' CSS', ' JavaScript'];
  let newTechno = techno.push('')
  document.getElementById("myText").innerHTML = techno;
};



/* other option :
let techno = [' HTML', ' CSS', ' JavaScript'];
techno.push('sss')
document.getElementById("addTechno").innerHTML = techno; */



//function to allow the submit button
    let btnSend = document.querySelector('button');
    let input = document.querySelector("input")

    input.addEventListener('keyup', () => {
      if (input.value.length < 1)

        btnSend.disabled = true
      else btnSend.disabled = false;

    });

    

   