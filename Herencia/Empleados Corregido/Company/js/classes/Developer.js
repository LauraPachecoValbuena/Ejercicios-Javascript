function Developer(name, lastName, ID, position, hourPool, workedHours){
	
	Employee.call(this, name, lastName, ID, position);
	
	this.hourPool = hourPool;
	this.workedHours = workedHours;

	
	Developer.prototype.getSalary = function (){
		let extras = workedHours - hourPool;
		if (extras < 0) {
			extras = 0;
		}
		
		return Employee.BASE_SALARY + ((workedHours - extras) * Employee.DEV_NORMAL_SALARY_BY_HOUR) + (extras * Employee.DEV_EXTRA_SALARY_BY_HOUR);		
	}
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

