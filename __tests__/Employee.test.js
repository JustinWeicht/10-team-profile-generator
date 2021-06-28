// using Employee constructor 
const Employee = require('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee('Some One', 123, 'someone@mail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("user's employee name input", () => {
    const employee = new Employee('Some One', 123, 'someone@mail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test("user's employee ID input", () => {
    const employee = new Employee('Some One', 123, 'someone@mail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test("user's employee email input", () => {
    const employee = new Employee('Some One', 123, 'someone@mail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test("user's employee role input", () => {
    const employee = new Employee('Some One', 123, 'someone@mail.com');

    expect(employee.getRole()).toEqual("Employee");
});