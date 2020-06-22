// const fs = require("fs");
const inquirer = require("inquirer");
const fs = require("fs-extra");
const util = require("util");
const questions = require("./query/questions.js");
const generateHTML = require("./generateHTML.js");
const employeeTemplate = require("./template/employeeTemplate.js");
const Manager = require("./constructor/manager");
const Engineer = require("./constructor/engineer");
const Intern = require("./constructor/intern");
const writeFileAsync = util.promisify(fs.writeFile);

async function promptUser() {
  const managerInfo = await inquirer.prompt(questions.managerQuestions);

  const manager = new Manager(
    managerInfo.name,
    this.role,
    managerInfo.id,
    managerInfo.email,
    managerInfo.officeNumber
  );
  console.log(manager);
  employeeTemplate(manager);

  ///ENGINEER---
  let engineer;
  for (var i = 1; i <= managerInfo.numEngineer; i++) {
    const engPrompt = await inquirer.prompt(questions.engineerQuestions);

    const engineer = new Engineer(
      engPrompt.name,
      this.role,
      (engPrompt.id = i),
      engPrompt.email,
      engPrompt.github
    );
    console.log(engineer);
    employeeTemplate(engineer);
  }

  ///INTERN---
  let intern;
  for (var i = 1; i <= managerInfo.numIntern; i++) {
    const intPrompt = await inquirer.prompt(questions.internQuestions);
    const intern = new Intern(
      intPrompt.name,
      this.role,
      (intPrompt.id = i),
      intPrompt.email,
      intPrompt.school
    );
    // employeeTemplate(intern);
    console.log(intern);
    const profile = generateHTML(intern);
    writeFileAsync("./index.html", profile);
  }
}

promptUser();
