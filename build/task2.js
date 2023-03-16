"use strict";
class Course {
    constructor(courseId, courseName) {
        this.courseId = courseId;
        this.courseName = courseName;
    }
    courseDetails() {
        console.log(`Course Details......\n Course ID:${this.courseId} \n Course Name:${this.courseName} \n`);
    }
}
class Employee extends Course {
    constructor(courseId, courseName, empId, empName, empDesignation) {
        super(courseId, courseName);
        this.empId = empId;
        this.empName = empName;
        this.empDesignation = empDesignation;
    }
    employeeDetails() {
        console.log(`Employee Details....\n Employee ID:${this.empId} \n Employee Name:${this.empName} \n Employee Designation:${this.empDesignation}\n`);
    }
}
class Admin extends Employee {
    constructor(courseId, courseName, empId, empName, empDesignation, adminid, adminName) {
        super(courseId, courseName, empId, empName, empDesignation);
        this.adminId = adminid;
        this.adminName = adminName;
    }
    adminDetails() {
        this.courseDetails();
        this.employeeDetails();
        console.log(`Admin Details......\n Admin Id:${this.adminId}\n Admin Name:${this.adminName}`);
    }
}
let obj = new Admin("20BSC042", "UI design", 10, "Peter England", "Employee", "01AD100", "Srikanth");
obj.adminDetails();
class ElectricityBill {
    constructor(rate, units) {
        this.rate = rate;
        this.units = units;
    }
}
class Domestic extends ElectricityBill {
    constructor(uni, rate, units) {
        super(rate, units);
        this.units = uni;
        this.rate = rate;
    }
    billDetails() {
        console.log(`Bill details.... \n Units:${this.units} \n Rate=${this.rate}\n Total:${this.rate * this.units} Total:${this.rate * this.units}`);
    }
}
class Commercial extends ElectricityBill {
    constructor(uni, rate, units) {
        super(rate, units);
        this.units = uni;
        this.rate = rate;
    }
    billDetails() {
        console.log(`Bill details.... \n Units:${this.units} \n Rate=${this.rate}\n Total:${this.rate * this.units} Total:${this.rate * this.units}`);
    }
}
var domObj = new Domestic(10, 5, 10);
domObj.billDetails();
var comObj = new Commercial(10, 5, 10);
comObj.billDetails();
