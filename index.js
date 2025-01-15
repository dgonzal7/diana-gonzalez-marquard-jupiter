// Add a footer 
const footer = document.createElement("footer");
const body = document.querySelector("body");
body.appendChild(footer);

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

// //for (let i = 0; i < skills.length; i++) {
//   let skill = document.createElement("li");
//   skill.innerText = skill;
//   skillsList.appendChild(skill);
// }

for (let skill of skills) {
  let newskill = document.createElement("li");
  newskill.innerHTML = skill;
  skillsList.appendChild(newskill);
}