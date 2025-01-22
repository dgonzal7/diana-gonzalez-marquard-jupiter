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
messageForm.addEventListener("submit", handleSubmit);

function handleSubmit(e){
  e.preventDefault();
  const name = e.target.usersName.value;
  const email = e.target.usersEmail.value;
  const message = e.target.usersMessage.value;
  console.log(name, email, message);
  
  //Messages in List
  const messageSection = document.querySelector('#messages');
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  
  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>\n
  <span>${usersMessage}</span>`;
  
  //New Button Element
  const removeButton = document.createElement("remove-button");
  removeButton.innerText = "Remove";
  removeButton.setAttribute("type", "button");
  removeButton.setAttribute("id", "remove-buttonid");
  //removeButton.addEventListener("click", handleRemove);
  //const entry = document.querySelector("parentNode");
  //remove(entry);

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  //Clear the form
  messageForm.reset();
};

const messageSection = document.querySelector('#messages');
const messageList = messageSection.querySelector("ul");
//const newMessage = messageSection.createElement("li");
// newMessage.innerHTML = ;
//<a href="mailto:usersEmail">usersName</a>
//<span>usersMessage</span>

//const removeButton 