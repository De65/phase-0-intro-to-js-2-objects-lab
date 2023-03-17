const employee ={name:"mars", streetAddress:"harambee"}
function updateEmployeeWithKeyAndValue(employee, key, value){
	employee.name = 'Sam'
	return object.assign({}, employee, {[key]: value})
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
	employee[key] = value
	return employee
}
function deleteFromEmployeeByKey(employee, key){
	const clone = object.assign({}, employee)
	delete clone[key]
	return clone
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
	delete employee[key]
	return employee
}
