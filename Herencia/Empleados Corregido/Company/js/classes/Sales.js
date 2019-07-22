function Sales(name, lastName, ID, position, numberOfSales){
	
	Employee.call(this, name, lastName, ID, position);
	
	this.numberOfSales = numberOfSales;
	
	Sales.prototype.getSalary = function (){
		return Employee.BASE_SALARY + (this.numberOfSales * Employee.SALARY_BY_SALE);
	}
}

Sales.prototype = Object.create(Employee.prototype);
Sales.prototype.constructor = Sales;

