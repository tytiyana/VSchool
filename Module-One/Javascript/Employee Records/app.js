const employees = []

function Employee (name, jobTitle, salary, status = "Full Time") {
    this.firstName = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status 
}

Employee.prototype.statusOverride = function(){
    console.log(this.status)
}

const printEmployeeForm = (x) =>{
    console.log(x)
}

const elizabeth = new Employee("Elizabeth Maria Sisch","Social Media Director", "27.50/hr", "Part Time" );

const alaundria = new Employee("Alaundria Nicole Smith", "CEO","479,550k");

const viviana = new Employee("Viviana Samia Vincenza","Software Engineer","140,500k","Contract")

employees.push(elizabeth,alaundria,viviana)
printEmployeeForm(employees)
