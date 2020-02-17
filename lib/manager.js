const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, role, id, email, officeNumber) {
    super(name, "manager", id, email);
    // const role = "manager";
    this.officeNumber = officeNumber;
  }

  getRole() {
    return this.role;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
