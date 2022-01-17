// Abstract class
abstract class Department {
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

  // Abstract method
  abstract printEmployeeInformation(): void;
  // console.log(this.employees.length);
  // console.log(this.employees);

  // Static method
  static createEmployee(name: string) {
    return { name };
  }
}

class ITDepartment extends Department {
  admins: string[];
  private recentAdmin: string;
  private static instance: ITDepartment;

  private constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
    this.recentAdmin = this.admins[0];
  }

  static getITDepartment(id: string, admins: string[]): ITDepartment {
    if (!this.instance) {
      this.instance = new ITDepartment(id, admins);
    }

    return this.instance;
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

  // Overriding method implementation
  printEmployeeInformation() {
    console.log(this.admins.length);
    console.log(this.admins);
    console.log(this.mostRecentAdmin);
  }
}

let dept = ITDepartment.getITDepartment("100", ["Max Warmerdam"]);

// Using statics
console.log(Department.createEmployee("Kane"));

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
