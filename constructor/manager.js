const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, role, id, email, officeNumber) {
    super(name, "manager", id, email);
    // const role = "manager";
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
