const Employee = require('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee('Some One', '123', 'someone@mail.com');

    expect(employee.name).toBe('Some One');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('someone@mail.com');
});

test("user's employee name input", () => {
    const employee = new Employee('Some One', '123', 'someone@mail.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Some One'));
});

test("user's employee ID input", () => {
    const employee = new Employee('Some One', '123', 'someone@mail.com');

    expect(employee.getId()).toEqual(expect.stringContaining('123'));
});

test("user's employee email input", () => {
    const employee = new Employee('Some One', '123', 'someone@mail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('someone@mail.com'));
});

test("user's employee role input", () => {
    const employee = new Employee('Some One', '123', 'someone@mail.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});