// const fs = require("fs");
const inquirer = require("inquirer");
const fs = require("fs-extra");
const util = require("util");
const questions = require("./questions.js");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
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

  for (var i = 1; i <= managerInfo.numEngineer; i++) {
    const engineerInfo = await inquirer.prompt(questions.engineerQuestions);
    const engineer = new Engineer(
      engineerInfo.name,
      this.role,
      (engineerInfo.id = i),
      engineerInfo.email,
      engineerInfo.github
    );
    console.log(engineer);
  }

  for (var i = 1; i <= managerInfo.numIntern; i++) {
    const internInfo = await inquirer.prompt(questions.internQuestions);
    const intern = new Intern(
      internInfo.name,
      this.role,
      (internInfo.id = i),
      internInfo.email,
      internInfo.school
    );
    console.log(intern);
  }
}

promptUser();
