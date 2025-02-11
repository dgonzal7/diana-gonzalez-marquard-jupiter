 // Add a footer 
const footer = document.createElement("footer");
const body = document.querySelector("body");
document.body.appendChild(footer);

// Create a variable named footer and assign it the footer element by using "DOM Selection" to select the <footer> element from the DOM

const today = new Date();
const thisYear = today.getFullYear();

const fter = document.querySelector('footer');
fter.classList.add("copyright");
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
messageForm.addEventListener("submit", handleSubmit);



// Handles when the message form is Submitted
function handleSubmit(event) {
  event.preventDefault();

  const name = event.target.usersNameId.value;
  const email = event.target.emailId.value;
  const message = event.target.usersMessageId.value;
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);


  //Messages in List
  const messageSection = document.getElementById('messages');
  const messageList = messageSection.querySelector("ul");

  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${email}">${name}</a><span>${message}</span> `;
  console.log("new message:", newMessage);

  // Create remove button
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.setAttribute("type", "button");
  
  // When remove is clicked, remove the message 
  removeButton.addEventListener("click", (e) => {
  let entry = removeButton.parentNode;
  entry.remove();
  });

  //Append remove button and new message
  messageSection.classList.remove('hidden'); 
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  //Reset the form after submit
  messageForm.reset();
  //messageSection.hidden = false; 
}


//FETCH
fetch('https://api.github.com/users/dgonzal7/repos')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      console.log("Yikes!");
    }
  })
  
  .then((data) => {
    const repos = data;
    
    const projectSection = document.getElementById("Projects");
    const projectList = projectSection.getElementsByTagName("ul")[0];

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

