// Add a footer 
const footer = document.createElement("footer");
const body = document.querySelector("body");
document.body.appendChild(footer);

// Create a variable named footer and assign it the footer element by using "DOM Selection" to select the <footer> element from the DOM

const today = new Date();
const thisYear = today.getFullYear();

const fter = document.querySelector('footer');

const copyright = document.createElement("p");
copyright.innerHTML = `&#169; Diana Gonzalez-Marquard 
${thisYear}`

footer.appendChild(copyright);

//Technical Skills
const skills = ["JavaScript", "HTML", "CSS", "GitHub"];
const skillsSection = document.querySelector('#Skills');
const skillsList = skillsSection.querySelector("ul");

for (let skill of skills) {
  let newskill = document.createElement("li");
  newskill.innerHTML = skill;
  skillsList.appendChild(newskill);
}

const messageForm = document.querySelector("[name='leave_message']");
messageForm.addEventListener("submit", handleSubmit)


  //remove button callback
  function forRemoveButton(e) {
    console.log("remove");
    const entry = e.target.parentNode;
    entry.remove();

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.getElementsByTagName("li");
    console.log(messageList);
    console.log(messageList.length);
    if (messageList.length === 0) {
      messageSection.hidden = true;
    }
  }


// submit callback
function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  console.log(data); 

  const name = data.get("usersNameId");
  const email = data.get("emailId");
  const message = data.get("usersMessageId");
  console.log(usersNameId);
  console.log(emailId);
  console.log(usersMessageId);


  //Messages in List
  const messageSection = document.getElementById('messages');
  const messageList = messageSection.getElementsByTagName("ul");
  console.log(messageList);

  messageSection.hidden = false; 

  const newMessage = document.createElement("li");
  newString = `<a href="mailto:${emailId}">${usersNameId}</a>\n
  <span>${usersMessageId}</span>`;
  console.log(newString);
  newMessage.innerHTML = newString;

  //Add remove button
  const removeButton = document.createElement("BUTTON");
  removeButton.innerText = "Remove";
  removeButton.setAttribute("type", "button");
  removeButton.setAttribute("id", "remove-buttonid");
  removeButton.addEventListener('click', forRemoveButton);
  console.log(removeButton);

  //Append remove button and message

  newMessage.appendChild(removeButton);
  messageList[0].appendChild(newMessage);

  //Reset
  messageForm.reset();
}


//FETCH
fetch('https://api.github.com/users/dgonzal7/repos')
  .then((response => {
    if (response.ok) {
      return response.json();
    } else {
      console.log("Yikes!");
    }
  })
  
  .then((data => {
    const repos = JSON.parse(data);
    console.log(repos);
    
    const projectSection = document.getElementById("Projects");
    const projectList = projectSection.getElementsByTagName("ul")[0];
    console.log(projectList);

    //Create a for loop to iterate over your repositories Array starting at index 0
    //Inside the loop, create a variable named project to make a new list item (li) element - createElement method

    for (let repo of repos) {
      let newproject = document.createElement("li");
      newproject.textContent = repo.name;
      projectList.appendChild(newproject);
    }
  })

  .catch((error) => {
    console.error("Something went wrong:", error);
  });

