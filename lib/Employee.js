class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getRole() {
        return 'Employee'
    }
    getName() {
        return 'name: ${this.name}'
    }
    getId() {
        return 'id: ${this.id}'
    }
    getEmail() {
        return 'email: ${this.email}'
    }
};

module.exports = Employee;