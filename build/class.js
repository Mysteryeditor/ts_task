"use strict";
class Employee {
    constructor(empname, empid, empdesignation, empsalary, empproject) {
        this.empname = empname;
        this.empid = empid;
        this.empdesignation = empdesignation;
        this.empsalary = empsalary;
        this.empproject = empproject;
    }
    displayEmpDetails() {
        let result = ["Employee Name:", this.empname, "Employee ID:", this.empid, "Employee Designation:", this.empdesignation, "Employee Salary:", this.empsalary, "Employee Project:", this.empproject];
        let str = result.toString();
        console.log(str);
    }
}
let empObj = new Employee("Srikanth", 690179, "Ui/Ux Designer", 60000, "AI");
empObj.displayEmpDetails();
