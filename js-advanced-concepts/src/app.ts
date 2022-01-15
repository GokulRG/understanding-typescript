class Department {
  // No need to declare the properties here and assign them in the constructor
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  // Simply specify the access modifier and automatically the value passed while the constructor is called will be assigned to the object.
  // readonly keyword makes sure that the property isn't altered
  constructor(private readonly id: string, private name: string) {
    // No need to do this below.
    // this.name = name;
  }

  // This argument isn't required for calling this method. But this ensures that the describe method can only be called by instances of the class Department
  describe(this: Department) {
    console.log(`Department ID : ${this.id}, Department Name : ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = "222"; error because ID is readonly
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  private recentAdmin: string;

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
    this.recentAdmin = this.admins[0];
  }

  // Getter
  get mostRecentAdmin() {
    if (this.recentAdmin) {
      return this.recentAdmin;
    }

    throw new Error("No admins found");
  }

  // Setter
  set mostRecentAdmin(value: string) {
    if (!value) {
      return;
    }

    this.mostRecentAdmin = value;
  }

  // Overriding the addEmployee behavior of Department to have customized behavior for the IT Dept
  addEmployee(name: string): void {
    if (name === "Max") {
      console.log("Can't add max cause he's shit");
      return;
    }
    super.addEmployee(name);
  }
}

let dept = new ITDepartment("100", ["Max Warmerdam"]);
dept.addEmployee("Kane");
dept.addEmployee("Williamson");
dept.describe();
// dept.employees[2] = 'Illegal employee'; error because it's private
dept.printEmployeeInformation();
// You access your getter like a property even though it's a method.

// Same thing applies for setter as well. This is actually a private variable. But this line of code works because we're actually going through the setter method.
dept.mostRecentAdmin = "Gokul";
console.log(dept.mostRecentAdmin);
console.log(dept);
