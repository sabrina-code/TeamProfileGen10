const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter your name.",
    validate: function validateFirstName(name) {
      if (name === "") {
        console.log("Please enter a name.");
      } else {
        return name !== "";
      }
    }
  },
  {
    type: "input",
    name: "id",
    message: "Please enter your id."
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email."
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is your office number?"
  },
  {
    type: "input",
    name: "numEngineer",
    message: "What many engineers will be entered here?"
  },
  {
    type: "input",
    name: "numIntern",
    message: "What many interns you have?"
  }
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter the engineer's name.",
    validate: function validateFirstName(name) {
      if (name === "") {
        console.log("Please enter a name.");
      } else {
        return name !== "";
      }
    }
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the engineer's email."
  },
  {
    type: "input",
    name: "github",
    message: "Enter the engineer's GitHub username."
  }
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter the intern's name.",
    validate: function validateFirstName(name) {
      if (name === "") {
        console.log("Please enter a name.");
      } else {
        return name !== "";
      }
    }
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the intern's email."
  },
  {
    type: "input",
    name: "school",
    message: "Enter the intern's school."
  }
];

module.exports = {
  managerQuestions,
  engineerQuestions,
  internQuestions
}; //Export as an object

/* var prompt = inquirer.createPromptModule();
const baseQuestions = [...];
prompt(baseQuestions[0]); */
