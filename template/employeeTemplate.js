const app = require("../app.js");
let joinHtml = "";
let positionInfo = "";
const employeeTemplate = data => {
  if (data.getRole() === "manager") {
    positionInfo = `office number: ${data.OfficeNumber}`;
  } else if (data.getRole() === "engineer") {
    positionInfo = `github username: ${data.getGithub()}`;
  } else if (data.getRole() === "intern") {
    positionInfo = `school name: ${data.school}`;
  }

  const markup =
    `<div id="${data.getRole()}" class="infocard ">
        <h2 class="">${data.name}</h2>  
        <h3 class="role">${data.role}</h3>
        <p class="">id: ${data.id}</p> 
        <p class="">` +
    positionInfo +
    `</p>                          
        <p class="">email: ${data.email}</p>        
        </div>`;
  joinHtml += markup;
  return joinHtml;
};

module.exports = employeeTemplate;
