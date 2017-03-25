import Person from './Person'

class Student implements Person {

	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName
		this.lastName = lastName
	}

	sayHello() {
		return "Hello, " + this.firstName + " " + this.lastName
	}
}

export default Student;