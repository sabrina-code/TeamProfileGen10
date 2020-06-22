const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, role, id, email, school) {
    super(name, "intern", id, email);
    this.school = school;
  }

  getRole() {
    return "intern";
  }
  getId() {
    return this.id;
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
