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
    