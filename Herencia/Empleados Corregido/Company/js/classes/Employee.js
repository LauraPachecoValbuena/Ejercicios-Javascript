function Employee(name, lastName, ID, position){
	
	this.name = name;
	this.lastName = lastName;
	this.ID = ID;
	this.position = position;	
	
	
	Employee.prototype.getName = function (){
		return this.name;
	}
	Employee.prototype.getLastname = function (){
		return this.lastName;
	}
	Employee.prototype.getID = function (){
		return this.ID;
	}
	Employee.prototype.getPosition = function (){
		return this.position;
	}
	
	Employee.prototype.getSalary = function (){
		return Employee.BASE_SALARY;
	}	
}

Employee.BASE_SALARY = 1500;
Employee.SALARY_BY_SALE = 70;
Employee.DEV_NORMAL_SALARY_BY_HOUR = 15;
Employee.DEV_EXTRA_SALARY_BY_HOUR = 30;
