"use strict";
class Employee1 {
     public empname: string;
     public empid: number | string;
     public empdesignation: string;
     public empsalary: number;
     empproject?: string;
     constructor(empname: string, empid: number, empdesignation: string, empsalary: number, empproject: string) {
         this.empname = empname;
         this.empid = empid;
         this.empdesignation = empdesignation;
         this.empsalary = empsalary;
         this.empproject = empproject;
     }
     public displayEmpDetails() {
         let result = ["Employee Name:", this.empname, "Employee ID:", this.empid, "Employee Designation:", this.empdesignation, "Employee Salary:", this.empsalary, "Employee Project:", this.empproject];
         let str = result.toString();
         console.log(str)
     }
 }
     let empObj = new Employee1("Srikanth", 690179, "Ui/Ux Designer", 60000, "AI");
    
   empObj.displayEmpDetails();