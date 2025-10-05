//Step 2 Create The Employee Base Class
    class Employee {
        constructor(name,department){
            this.name = name;
            this.department = department;
        }
    
    describe (){
        return `${this.name} works in ${this.department}`;
    }
}
//Step 3 Create a Subclass Called Manager That Extends Employee
    class Manager extends Employee {
        constructor (name, department, teamSize){
          super(name, department); 
          this.teamSize = teamSize;
        }
            describe(){
                return `${this.name} manages ${this.teamSize} employees in the ${this.department}`;
            }
    }
//Step 4 Create a Few Sample Employees
    const emp1 = new Employee("Tyler", "Outdoors");
    const emp2 = new Employee("Josh", "Athletics");
    const emp3 = new Employee("Nick", "Aquatics");

    const mgr1 = new Manager("Bryce", "Opperations", 10);
    const mgr2 = new Manager("Mike", "Retail", 20);
//Step 5 Create a Class Called Company
class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    console.log("Company Employees:");
    this.employees.forEach(emp => {
      console.log(emp.describe());
    });
  }
}
//Instantiate a Company object
const myCompany = new Company();

myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(emp3);
myCompany.addEmployee(mgr1);
myCompany.addEmployee(mgr2);

myCompany.listEmployees();